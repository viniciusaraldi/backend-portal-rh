import express from 'express'
import usuarioController from '../controller/usuarioController.js'

const routes = express.Router()

routes
    .post("/login/", usuarioController.loginUsuario)
    .post("/cadastro-usuario/", usuarioController.criaUsuario)
    .put("/resete-senha/", usuarioController.reseteSenhaUsuario)

export default routes
