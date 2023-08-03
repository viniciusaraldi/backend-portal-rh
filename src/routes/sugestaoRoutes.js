import express from 'express'
import sugestaoController from '../controller/sugestaoController.js'
import verificaToken from '../middleware/verificaToken.js'

const routes = express.Router()

routes
    .get("/sugestoes", verificaToken, sugestaoController.listagemSugestao)
    .get("/sugestoes/:id", verificaToken, sugestaoController.listagemSugestaoId)
    .post("/sugestoes", sugestaoController.adicionaSugestao)
    .put("/sugestoes/:id", verificaToken, sugestaoController.atualizaSugestao)
    .delete("/sugestoes/:id", verificaToken, sugestaoController.deletaSugestao)

export default routes
