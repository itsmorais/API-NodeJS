// Reune todos os grupos de ROTAS que estão separadas por arquivos
const { Router } = require('express')
const usersRoutes = require('./users.routes')
const notesRoutes = require('./notes.routes')
const tagsRoutes = require('./tags.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/notes', notesRoutes)
routes.use('/tags', tagsRoutes)

module.exports = routes
