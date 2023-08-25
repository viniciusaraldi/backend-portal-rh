import mongoose from "mongoose";

const sugestaoSchema = new mongoose.Schema({
    id: {type: String},
    text: {type: String, required: [true, "Sugestão é Obrigatório"]}
})

const sugestao = mongoose.model("sugestões", sugestaoSchema)

export default sugestao
