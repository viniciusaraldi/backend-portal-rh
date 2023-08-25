import mongoose from "mongoose";

const elogioSchema = new mongoose.Schema({
    id: {type: String},
    text: {type: String, required: [true, "Elogio é Obrigatório"]}
})

const elogio = mongoose.model("elogios", elogioSchema)

export default elogio
