import mongoose from "mongoose";

const criticaSchema = new mongoose.Schema({
    id: {type: String},
    text: {type: String, required: [true, "Critica é Obrigatório"]}
})

const critica = mongoose.model("criticas", criticaSchema)

export default critica
