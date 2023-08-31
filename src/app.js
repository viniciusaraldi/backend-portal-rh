// Bibliotecas
import 'dotenv/config'
import express from 'express'
import NodeCache from 'node-cache'
import cors from 'cors'
// Projeto
import db from './config/db.js'
import sugestao from './routes/sugestaoRoutes.js'
import elogios from './routes/elogioRoutes.js'
import criticas from './routes/criticaRoutes.js'
import usuarios from './routes/usuarioRoutes.js'
import cardapios from './routes/cardapioRoutes.js'
import roles from './routes/rolesRoutes.js'
import erroSolicitacao from './middleware/erroSolicitacao.js'

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () =>  console.log("Sucesso ao conectar com o Banco de Dados"))

const app = express()
export const cache = new NodeCache()

app.use(
    cors(),
    express.json(),
    sugestao,
    elogios,
    criticas,
    roles,
    usuarios,
    cardapios,
    erroSolicitacao,
)


export default app