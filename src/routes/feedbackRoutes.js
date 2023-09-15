import express from 'express'
import feedbacksController from '../controller/feedbackController.js'
import verificaToken from '../middleware/userRoleRh.js'

const routes = express.Router()

routes
    .get("/feedbacks", verificaToken, feedbacksController.listagemFeedbacks)
    .get("/feedbacks/:id", verificaToken, feedbacksController.listagemFeedbacksId)
    .post("/feedbacks", feedbacksController.adicionaFeedbacks)
    .put("/feedbacks/:id", verificaToken, feedbacksController.atualizaFeedbacks)
    .delete("/feedbacks/:id", verificaToken, feedbacksController.deletaFeedbacks)

export default routes
