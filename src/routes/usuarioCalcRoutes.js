import express from 'express';
import usuarioCalcController from '../controller/usuarioCalcController.js';

const routes = express.Router()

routes
    .get("/lista-usuario-co", usuarioCalcController.listaUsuarioCalc)
    .get("/lista-usuario-co/:id", usuarioCalcController.listaUsuarioCalcID)
    .get("/calculo", usuarioCalcController.calculoCo)
    .post("/lista-usuario-co", usuarioCalcController.adicionaUsuarioCalc)
    .put("/lista-usuario-co/:id", usuarioCalcController.atualizaUsuarioCalc)
    .delete("/lista-usuario-co/:id", usuarioCalcController.deletaUsuarioCalc)

export default routes
