const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const notesRoutes = Router()

function myMiddleware(req, res, next) {
  console.log('Você passou pelo Middleware')
  next()
}

const notesController = new NotesController()
notesRoutes.get('/', myMiddleware, notesController.index)
notesRoutes.post('/:user_id', myMiddleware, notesController.create)
notesRoutes.get('/:id', myMiddleware, notesController.show)
notesRoutes.delete('/:id', myMiddleware, notesController.delete)

module.exports = notesRoutes
