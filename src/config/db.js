import mongoose from "mongoose";
import 'dotenv/config'

mongoose.connect(process.env.SETTINGS_DADABASE)

const db = mongoose.connection

export default db