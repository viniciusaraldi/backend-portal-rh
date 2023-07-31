import express from 'express'
import criticaController from '../controller/criticaController.js'

const routes = express.Router()

routes
    .get("/criticas", criticaController.listagemCriticas)
    .get("/criticas/:id", criticaController.listagemCriticasId)
    .post("/criticas", criticaController.adicionaCritica)
    .put("/criticas/:id", criticaController.atualizaCritica)
    .delete("/criticas/:id", criticaController.deletaCritica)

export default routes
