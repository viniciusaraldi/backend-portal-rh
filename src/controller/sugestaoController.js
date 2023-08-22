import sugestao from "../models/Sugestao.js";

class sugestaoController {
    static listagemSugestao = async (req, res) => {
        try {
            const dados = await sugestao.find()
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados) 
        }  catch(err) {
            return res.status(500).send(err)
        }
    }

    static listagemSugestaoId = async (req, res) => {
        try {
            const id = await req.params.id
            const dados = await sugestao.findById(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return res.status(500).send(err)
        }

    }

    static adicionaSugestao = async (req, res) => {
        try {
            const dados = new sugestao(req.body)
            const dadosEnvio = await dados.save()
            return res.status(201).send(dadosEnvio)
        }  catch(err) {
            return res.status(500).send(err)
        }

    }

    static atualizaSugestao = async (req, res) => {
        try {
            const id = await req.params.id
            const dados = await sugestao.findByIdAndUpdate(id, req.body)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        }  catch(err) {
            return res.status(500).send(err)
        }

    }

    static deletaSugestao = async (req, res) => {
        try {
            const id = req.params.id
            const dados = await sugestao.findByIdAndDelete(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return res.status(500).send(err)
        }
    }

}

export default sugestaoController
