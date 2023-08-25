import mongoose, { Schema } from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: {type: String},
    usuario: {type: String, required: [true, "Usuario é Obrigatório"]},
    password: {type: String, required: [true, "Senha é Obrigatório"]},
    role: {type: mongoose.Schema.Types.ObjectId, ref: "roles", required: [true, "Cargo é Obrigatório"]}
})

const usuarios = mongoose.model("usuarios", usuarioSchema)

export default usuarios
