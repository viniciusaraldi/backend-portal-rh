import elogio from "../models/Elogio.js";

class elogioController {
    static listagemElogios = async (req, res, next) => {
        try {
            const dados = await elogio.find()
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados) 
        }  catch(err) {
            return next(err, req, res)
        }
    }

    static listagemElogioId = async (req, res, next) => {
        try {
            const id = await req.params.id
            const dados = await elogio.findById(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return next(err, req, res)
        }

    }

    static adicionaElogio = async (req, res, next) => {
        try {
            const dados = new elogio(req.body)
            const dadosEnvio = await dados.save()
            return res.status(201).send(dadosEnvio)
        }  catch(err) {
            return next(err, req, res)
        }

    }

    static atualizaElogio = async (req, res, next) => {
        try {
            const id = await req.params.id
            const dados = await elogio.findByIdAndUpdate(id, req.body)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        }  catch(err) {
            return next(err, req, res)
        }

    }

    static deletaElogio = async (req, res, next) => {
        try {
            const id = req.params.id
            const dados = await elogio.findByIdAndDelete(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return next(err, req, res)
        }
    }

}

export default elogioController
