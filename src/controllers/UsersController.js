const AppError = require('../utils/AppError')
const sqliteConnection = require('../database/sqlite')
const { response, json } = require('express')
const { hash, compare } = require('bcryptjs')

class UsersController {
  // No MÁXIMO 5 métodos(funções)
  // 1 função index - GET para listar vários registros
  // 1 função show - Get para exibir um registro específico
  // 1 função create - POST para criar um registro
  // 1 função update - PUT para atualzar um registro
  // 1 função - DELETE para remover um registro
  async create(req, res) {
    // inicializa variaveis
    const { nome, email, password } = req.body

    const database = await sqliteConnection()
    const checkUserExist = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (checkUserExist) {
      throw new AppError('Este e-mail já está em uso')
    }
    // criptografando senha do usuário
    const hashedPassowd = await hash(password, 8)
    // Executando comando SQLITE para INSERIR novo usuário
    await database.run(
      'INSERT INTO users (name,email,password) VALUES (?,?,?)',
      [nome, email, hashedPassowd]
    )
    return res.status(201).json()
  }

  async update(req, res) {
    const { nome, email, password, old_password } = req.body
    const user_id = req.user.id

    const database = await sqliteConnection()
    const user = await database.get(
      'SELECT password FROM users WHERE id = (?)',
      [user_id]
    )
    if (!user) {
      throw new AppError('Usuário não encontrado')
    }
    const userWithUpdatedEmail = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('Este e-mail já está em uso!')
    }
    // se nome for undefined -> passe a usar user.name
    user.name = nome ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError('Informe a senha antiga para trocar a senha')
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError('A senha antiga não confere')
      }

      user.password = await hash(password, 8)
    }
    await database.run(
      `UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, user_id]
    )
    return res.json()
  }
}

module.exports = UsersController
