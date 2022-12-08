const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const ensureAuth = require('../middlewares/ensureAuth')
const notesRoutes = Router()

function myMiddleware(req, res, next) {
  console.log('Você passou pelo Middleware')
  next()
}

const notesController = new NotesController()
// Middleware aplicado a todas as rotas
notesRoutes.use(ensureAuth)
notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes
