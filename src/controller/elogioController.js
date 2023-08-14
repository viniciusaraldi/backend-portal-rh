import elogio from "../models/Elogio.js";

class elogioController {
    static listagemElogios = async (req, res) => {
        try {
            const dados = await elogio.find()
            return res.status(200).send(dados) 
        }  catch(err) {
            return res.status(500).send(err)
        }
    }

    static listagemElogioId = async (req, res) => {
        try {
            const id = await req.params.id
            const dados = await elogio.findById(id)
            return res.status(200).send(dados)
        } catch(err) {
            return res.status(500).send(err)
        }

    }

    static adicionaElogio = async (req, res) => {
        try {
            const dados = new elogio(req.body)
            const dadosEnvio = await dados.save()
            return res.status(201).send(dadosEnvio)
        }  catch(err) {
            return res.status(500).send(err)
        }

    }

    static atualizaElogio = async (req, res) => {
        try {
            const id = await req.params.id
            const dados = await elogio.findByIdAndUpdate(id, req.body)
            return res.status(200).send(dados)
        }  catch(err) {
            return res.status(500).send(err)
        }

    }

    static deletaElogio = async (req, res) => {
        try {
            const id = req.params.id
            const dados = await elogio.findByIdAndDelete(id)
            return res.status(200).send(dados)
        } catch(err) {
            return res.status(500).send(err)
        }
    }

}

export default elogioController
