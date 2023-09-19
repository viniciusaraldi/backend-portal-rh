// Bibliotecas
import 'dotenv/config'
import express from 'express'
// Projeto
import db from './config/db.js'
import router from './routes/index.js'

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () =>  console.log("Sucesso ao conectar com o Banco de Dados"))

const app = express()

router(app)

export default app