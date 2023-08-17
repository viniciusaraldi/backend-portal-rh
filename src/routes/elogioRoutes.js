import express from 'express'
import elogioController from '../controller/elogioController.js'
import verificaToken from '../middleware/verificaToken.js'

const routes = express.Router()

routes
    .get("/elogios", verificaToken, elogioController.listagemElogios)
    .get("/elogios/:id", verificaToken, elogioController.listagemElogioId)
    .post("/elogios", elogioController.adicionaElogio)
    .put("/elogios/:id", verificaToken, elogioController.atualizaElogio)
    .delete("/elogios/:id", verificaToken, elogioController.deletaElogio)

export default routes
