import cors from 'cors'
import usuarios from './usuarioRoutes.js'
import cardapios from './cardapioRoutes.js'
import roles from './rolesRoutes.js'
import erroSolicitacao from '../middleware/erroSolicitacao.js'
import feedbacks from './feedbackRoutes.js'
import novidades from './novidadeRoutes.js'
import express from 'express'

const router = app => {
    app.use(
        cors(),
        express.json(),
        novidades,
        feedbacks,
        roles,
        usuarios,
        cardapios,
        erroSolicitacao,
    )
}

export default router
