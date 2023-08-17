import cardapios from "../models/Cardapio.js";

class cardapioController {

    static listagemCardapios = async (req, res) => {
        try {
            const dados = await cardapios.find()
            return res.status(200).json(dados)
        } catch (err) {
            return res.status(500).send({message: `Erro: ${err}`})
        }
    }

    static listagemCardapiosPorId = async (req, res) => {
        try {
            const {id} = req.params
            const dados = await cardapios.findById(id)
            return res.status(200).json(dados)
        } catch (err) {
            return res.status(500).send({message: `Erro: ${err}`})
        }
    }

    static adicionaCardapios = async (req, res) => {
        try {
            const {data, cardapio} = req.body
            const newCardapio = new cardapios({
                data: data,
                cardapio: cardapio,
            })
            const dadosEnvio = await newCardapio.save()
            return res.status(201).send(dadosEnvio)
        } catch (err) {
            return res.status(500).send({message: `Erro: ${err}`})
        } 
    }

    static atualizaCardapios = async (req, res) => {
        try {
            const {id} = req.params
            const dados = await cardapios.findByIdAndUpdate(id, req.body)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send({message: `Id(${id}) foi atualizado com sucesso!`})
        } catch (err) {
            return res.status(500).send({message: `Erro: ${err}`})
        }
    }

    static deletaCardapios = async (req, res) => {
        try {
            const id = req.params.id
            const dados = await cardapios.findByIdAndDelete(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send({message: "Deletado com Sucesso!"})
        } catch (err) {
            return res.status(500).send({message: `Erro: ${err}`})
        }
    }
}

export default cardapioController
