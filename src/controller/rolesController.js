import roles from "../models/Role.js";

class rolesController {
    static listagemRoles = async (req, res) => {
        try {
            const dados = await roles.find()
            return res.status(200).send(dados) 
        }  catch(err) {
            return res.status(500).send(err)
        }
    }

    static adicionaRoles = async (req, res) => {
        try {
            const dados = new roles(req.body)
            const dadosEnvio = await dados.save()
            return res.status(201).send(dadosEnvio)
        }  catch(err) {
            return res.status(500).send(err)
        }

    }

    static atualizaRoles = async (req, res) => {
        try {
            const id = await req.params.id
            const dados = await roles.findByIdAndUpdate(id, req.body)
            return res.status(200).send(dados)
        }  catch(err) {
            return res.status(500).send(err)
        }

    }

    static deletaRoles = async (req, res) => {
        try {
            const id = req.params.id
            const dados = await roles.findByIdAndDelete(id)
            return res.status(200).send(dados)
        } catch(err) {
            return res.status(500).send(err)
        }
    }

}

export default rolesController
