import roles from "../models/Role.js";

class rolesController {
    static listagemRoles = async (req, res, next) => {
        try {
            const dados = await roles.find()
            return res.status(200).send(dados) 
        }  catch(err) {
            return next(err, req, res)
        }
    }

    static adicionaRoles = async (req, res, next) => {
        try {
            const dados = new roles(req.body)
            const dadosEnvio = await dados.save()
            return res.status(201).send(dadosEnvio)
        }  catch(err) {
            return next(err, req, res)
        }

    }

    static atualizaRoles = async (req, res, next) => {
        try {
            const id = await req.params.id
            const dados = await roles.findByIdAndUpdate(id, req.body)
            return res.status(200).send(dados)
        }  catch(err) {
            return next(err, req, res)
        }

    }

    static deletaRoles = async (req, res, next) => {
        try {
            const id = req.params.id
            const dados = await roles.findByIdAndDelete(id)
            return res.status(200).send(dados)
        } catch(err) {
            return next(err, req, res)
        }
    }

}

export default rolesController
