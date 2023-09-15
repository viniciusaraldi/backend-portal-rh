import express from 'express'
import novidadeController from '../controller/novidadeController.js'
import verificaToken from '../middleware/userRoleRh.js'

const routes = express.Router()

routes
    .get("/novidades", novidadeController.listagemNovidade)
    .get("/novidades/:id", novidadeController.listagemNovidadeId)
    .post("/novidades", verificaToken, novidadeController.adicionaNovidade)
    .put("/novidades/:id", verificaToken, novidadeController.atualizaNovidade)
    .delete("/novidades/:id", verificaToken, novidadeController.deletaNovidade)

export default routes
