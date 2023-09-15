import mongoose from "mongoose";

const novidadeSchema = new mongoose.Schema({
    id: {type: String},
    novidade: {type: String, required: true}
})

const novidades = mongoose.model("novidades", novidadeSchema);

export default novidades
