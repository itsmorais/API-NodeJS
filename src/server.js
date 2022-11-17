// Importanto biblioteca expressa responsável pelo tratamento de erros
require('express-async-errors')
// Importanto express
const express = require('express')
// Importando banco de dados criado na pasta sqlite
const migrationsRun = require('./database/sqlite/migrations')
// Inicializar o express
const app = express()
// Defininando o TIPO DE DADO que será recebido
app.use(express.json())

const AppError = require('./utils/AppError')
const routes = require('./routes')
const { response } = require('express')

// Params são obrigatórios passar na requisição
app.get('/message/:id/:user', (req, res) => {
  res.send(`ID da mensagem ${req.params.id}. Para o usuário ${req.params.user}`)
})

// query são opcionais
// query params http://localhost:3333/users?page=5&limit=10
app.get('/userss', (req, res) => {
  res.send(`<h1>Página: ${req.query.page}   Mostrar ${req.query.limit}</h1>`)
})

app.post('/user', (req, res) => {
  let nome = req.body.nome
  let email = req.body.email
  let password = req.body.password

  res.send(`Nome: ${nome}\nE-mail: ${email}\nSenha: ${password}`)
})

app.use(routes)

app.use((error, request, response, next) => {
  // Erro causado pelo usuário - Cliente
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  // observar o erro no console( ajuda a debuggar )
  console.error(error)
  // Erro causado pelo servidor
  return response.status(500).json({
    status: 'erro',
    message: 'Internal server error'
  })
})

// Inicializando o Banco de dados
migrationsRun()

// Localhost PORT
const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
