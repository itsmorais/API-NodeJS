const { Router } = require('express')
const TagsController = require('../controllers/TagsController')
const ensureAuth = require('../middlewares/ensureAuth')

const tagsRoutes = Router()

function myMiddleware(req, res, next) {
  console.log('Você passou pelo Middleware')
  next()
}

const tagsController = new TagsController()
tagsRoutes.get('/', ensureAuth, tagsController.index)
//tagsRoutes.post('/:user_id', myMiddleware, notesRoutes.create)
//tagsRoutes.get('/:id', myMiddleware, notesRoutes.show)
//tagsRoutes.delete('/:id', myMiddleware, notesRoutes.delete)

module.exports = tagsRoutes
