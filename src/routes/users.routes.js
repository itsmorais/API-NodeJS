const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const usersRoutes = Router()

function myMiddleware(req, res, next) {
  console.log('Você passou pelo Middleware')
  next()
}

const usersController = new UsersController()
usersRoutes.post('/', myMiddleware, usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes
