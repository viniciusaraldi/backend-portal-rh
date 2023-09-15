import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    id: {type: String},
    categorias: {type: String, required: true},
    feedbacks: {type: String, required: true} 
})

const feedbacks = mongoose.model("feedbacks", feedbackSchema)

export default feedbacks
