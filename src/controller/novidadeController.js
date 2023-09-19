import novidades from "../models/Novidade.js";

class novidadeController {

    static listagemNovidade = async (req, res) => {
        try {
            const dados = await novidades.find().sort({_id: -1}).exec();
            if (!dados || dados.length === 0) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send({message: dados}) 
        }  catch(err) {
            return next(err, req, res)
        }
    }

    static listagemNovidadeId = async (req, res) => {
        try {
            const id = await req.params.id
            const dados = await novidades.findById(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return next(err, req, res)
        }
    }

    static adicionaNovidade = async (req, res) => {
        try {
            const dados = new novidades(req.body)
            const dadosEnvio = await dados.save()
            return res.status(201).send(dadosEnvio)
        }  catch(err) {
            return next(err, req, res)
        }
    } 

    static atualizaNovidade = async (req, res) => {
        try {
            const id = await req.params.id
            const dados = await novidades.findByIdAndUpdate(id, req.body)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        }  catch(err) {
            return next(err, req, res)
        }
    }

    static deletaNovidade = async (req, res) => {
        try {
            const id = req.params.id
            const dados = await novidades.findByIdAndDelete(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return next(err, req, res)
        }
    }

}

export default novidadeController
