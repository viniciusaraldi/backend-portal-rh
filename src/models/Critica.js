import mongoose from "mongoose";

const criticaSchema = new mongoose.Schema({
    id: {type: String},
    text: {type: String, required: true}
})

const critica = mongoose.model("criticas", criticaSchema)

export default critica
