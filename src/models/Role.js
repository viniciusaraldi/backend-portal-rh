import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    id: {type: String},
    role: {type: String, required: true}
})

const roles = mongoose.model("roles", roleSchema)

export default roles