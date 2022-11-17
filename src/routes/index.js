// Reune todos os grupos de ROTAS que estão separadas por arquivos
const { Router } = require('express')
const usersRoutes = require('./users.routes')

const routes = Router()

routes.use('/users', usersRoutes)

module.exports = routes
