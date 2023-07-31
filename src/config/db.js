import mongoose from "mongoose";

mongoose.connect("mongodb+srv://viniciusheckert434:V1i2n3i4@portal-rh.sehbi3a.mongodb.net/portal-rh")

const db = mongoose.connection

export default db