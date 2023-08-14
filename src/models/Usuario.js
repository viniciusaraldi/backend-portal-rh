import mongoose, { Schema } from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: {type: String},
    usuario: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: mongoose.Schema.Types.ObjectId, ref: "roles", required: true}
})

const usuarios = mongoose.model("usuarios", usuarioSchema)

export default usuarios
