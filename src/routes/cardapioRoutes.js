import express from 'express'
import cardapioController from '../controller/cardapioController.js'
import verificaToken from '../middleware/userRoleRt.js'

const routes = express.Router()

routes
    .get("/cardapios", cardapioController.listagemCardapios)
    .get("/cardapios/busca", cardapioController.listagemCardapiosPorFiltro)
    .get("/cardapios/:id", cardapioController.listagemCardapiosPorId)
    .post("/cardapios", verificaToken, cardapioController.adicionaCardapios)
    .put("/cardapios/:id", verificaToken, cardapioController.atualizaCardapios)
    .delete("/cardapios/:id", verificaToken, cardapioController.deletaCardapios)

export default routes
