import express from 'express'
import db from './config/db.js'
import sugestao from './routes/sugestaoRoutes.js'
import elogios from './routes/elogioRoutes.js'
import criticas from './routes/criticaRoutes.js'
import usuarios from './routes/usuarioRoutes.js'
import cors from 'cors'
import 'dotenv/config'

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () =>  console.log("Sucesso ao conectar com o Banco de Dados"))

const app = express()

app.use(
    cors(),
    express.json(),
    sugestao,
    elogios,
    criticas,
    usuarios
)


export default app