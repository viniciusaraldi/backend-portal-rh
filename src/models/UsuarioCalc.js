import mongoose from 'mongoose';

const usuarioCalcSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    setor: {type: String, required: true},
    qtdeCopo: {type: Number, required: true}
});

const usuarioCalc = mongoose.model('usuarioCalc', usuarioCalcSchema)

export default usuarioCalc


