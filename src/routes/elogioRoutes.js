import express from 'express'
import elogioController from '../controller/elogioController.js'

const routes = express.Router()

routes
    .get("/elogios", elogioController.listagemElogios)
    .get("/elogios/:id", elogioController.listagemElogioId)
    .post("/elogios", elogioController.adicionaElogio)
    .put("/elogios/:id", elogioController.atualizaElogio)
    .delete("/elogios/:id", elogioController.deletaElogio)

export default routes
