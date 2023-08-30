import express from 'express'
import usuarioController from '../controller/usuarioController.js'
import verificaToken from '../middleware/verificaToken.js'

const routes = express.Router()

routes
    .post("/login/", usuarioController.loginUsuario)
    .post("/cadastro-usuario/", verificaToken, usuarioController.criaUsuario)
    .put("/resete-senha/", usuarioController.reseteSenhaUsuario)

export default routes
