import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: {type: String},
    usuario: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true}
})

const usuarios = mongoose.model("usuarios", usuarioSchema)

export default usuarios
