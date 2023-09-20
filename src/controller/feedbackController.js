import feedbacks from "../models/Feedback.js";

class feedbacksController {
    static listagemFeedbacks = async (req, res, next) => {
        try {
            const dados = await feedbacks.find().sort({_id: -1}).exec()
            if (!dados || dados.length === 0) {
                return res.status(404).send({message: "Feedback não encontrados!"})
            }
            return res.status(200).send(dados) 
        }  catch(err) {
            return next(err, req, res)
        }
    }

    static listagemFeedbacksId = async (req, res, next) => {
        try {
            const {id} = await req.params
            const dados = await feedbacks.findById(id)
            if (!dados) {
                return res.status(404).send({message: "Feedback não encontrado!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return next(err, req, res)
        }
    }

    static adicionaFeedbacks = async (req, res, next) => {
        try {
            const dados = new feedbacks(req.body)
            const dadosEnvio = await dados.save()
            return res.status(201).send(dadosEnvio)
        }  catch(err) {
            return next(err, req, res)
        }

    }

    static atualizaFeedbacks = async (req, res, next) => {
        try {
            const {id} = req.params
            const infos = req.body
            if (!infos || infos.length === 0) {
                return res.status(404).send({message: "Dados não informados!"})
            }
            const dados = await feedbacks.findByIdAndUpdate(id, req.body)
            if (!dados) {
                return res.status(404).send({message: "Feedback não encontrado!"})
            }
            return res.status(200).send(dados)
        }  catch(err) {
            return next(err, req, res)
        }

    }

    static deletaFeedbacks = async (req, res, next) => {
        try {
            const {id} = req.params
            const dados = await feedbacks.findByIdAndDelete(id)
            if (!dados) {
                return res.status(404).send({message: "Feedback não encontrado!"})
            }
            return res.status(200).send(dados)
        } catch(err) {
            return next(err, req, res)
        }
    }

}

export default feedbacksController
