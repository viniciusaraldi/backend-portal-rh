import express from 'express'
import criticaController from '../controller/criticaController.js'
import verificaToken from '../middleware/userRoleRh.js'

const routes = express.Router()

routes
    .get("/criticas", verificaToken, criticaController.listagemCriticas)
    .get("/criticas/:id", verificaToken, criticaController.listagemCriticasId)
    .post("/criticas", criticaController.adicionaCritica)
    .put("/criticas/:id", verificaToken, criticaController.atualizaCritica)
    .delete("/criticas/:id", verificaToken, criticaController.deletaCritica)

export default routes
