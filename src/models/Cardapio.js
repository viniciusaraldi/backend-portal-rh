import mongoose from "mongoose";

const cardapioSchema = new mongoose.Schema({
    id: {type: String},
    data: {type: String},
    cardapio: {type: Array, required: [true, "Cardapio é Obrigatório"]}
});

const cardapios = mongoose.model("cardapios", cardapioSchema)

export default cardapios
