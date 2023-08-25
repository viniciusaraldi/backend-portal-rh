import sugestao from "../models/Sugestao.js";

class sugestaoController {
    static listagemSugestao = async (req, res, next) => {
        try {
            const dados = await sugestao.find()
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados) 
        }  catch(err) {
            return next(err, req, res)
        }
    }

    static listagemSugestaoId = async (req, res, next) => {
        try {
            const id = await req.params.id
            const dados = await sugestao.findById(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return next(err, req, res)
        }
    }

    static adicionaSugestao = async (req, res, next) => {
        try {
            const dados = new sugestao(req.body)
            const dadosEnvio = await dados.save()
            return res.status(201).send(dadosEnvio)
        }  catch(err) {
            return next(err, req, res)
        }

    }

    static atualizaSugestao = async (req, res, next) => {
        try {
            const id = await req.params.id
            const dados = await sugestao.findByIdAndUpdate(id, req.body)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        }  catch(err) {
            return next(err, req, res)
        }

    }

    static deletaSugestao = async (req, res, next) => {
        try {
            const id = req.params.id
            const dados = await sugestao.findByIdAndDelete(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return next(err, req, res)
        }
    }

}

export default sugestaoController
