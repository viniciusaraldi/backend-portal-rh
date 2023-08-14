import express from "express";
import rolesController from "../controller/rolesController.js";

const routes = express.Router()

routes
    .get("/roles", rolesController.listagemRoles)
    .post("/roles", rolesController.adicionaRoles)
    .put("/roles/:id", rolesController.atualizaRoles)
    .delete("/roles/:id", rolesController.deletaRoles)

export default routes
