import critica from "../models/Critica.js";

class criticaController {
    static listagemCriticas = async (req, res) => {
        try {
            const dados = await critica.find()
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados) 
        }  catch(err) {
            return res.status(500).send(err)
        }
    }

    static listagemCriticasId = async (req, res) => {
        try {
            const id = await req.params.id
            const dados = await critica.findById(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return res.status(500).send(err)
        }

    }

    static adicionaCritica = async (req, res) => {
        try {
            const dados = new critica(req.body)
            const dadosEnvio = await dados.save()
            return res.status(201).send(dadosEnvio)
        }  catch(err) {
            return res.status(500).send(err)
        }

    }

    static atualizaCritica = async (req, res) => {
        try {
            const id = await req.params.id
            const dados = await critica.findByIdAndUpdate(id, req.body)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        }  catch(err) {
            return res.status(500).send(err)
        }

    }

    static deletaCritica = async (req, res) => {
        try {
            const id = req.params.id
            const dados = await critica.findByIdAndDelete(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return res.status(500).send(err)
        }
    }

}

export default criticaController
