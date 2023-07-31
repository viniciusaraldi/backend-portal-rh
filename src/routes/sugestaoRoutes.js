import express from 'express'
import sugestaoController from '../controller/sugestaoController.js'

const routes = express.Router()

routes
    .get("/sugestoes", sugestaoController.listagemSugestao)
    .get("/sugestoes/:id", sugestaoController.listagemSugestaoId)
    .post("/sugestoes", sugestaoController.adicionaSugestao)
    .put("/sugestoes/:id", sugestaoController.atualizaSugestao)
    .delete("/sugestoes/:id", sugestaoController.deletaSugestao)

export default routes
