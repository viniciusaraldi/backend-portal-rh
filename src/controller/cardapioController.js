import { cache } from "../app.js";
import cardapios from "../models/Cardapio.js";

class cardapioController {

    static listagemCardapios = async (req, res, next) => {
        try {
            const cacheKey = 'cardapios';
            const cacheData = cache.get(cacheKey)

            if (cacheData) {
                return res.status(200).send(cacheData)
            }

            const dados = await cardapios.find();
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }

            cache.set(cacheKey, dados, 3600)
            return res.status(200).json(dados)
        } catch (err) {
            return next(err, req, res)
        }
    }

    static listagemCardapiosPorId = async (req, res, next) => {
        try {
            const {id} = req.params
            const dados = await cardapios.findById(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).json(dados)
        } catch (err) {
            return next(err, req, res)
        }
    }

    static listagemCardapiosPorFiltro = async (req, res, next) => {
        try {
            const {data, cardapio} = req.query
            const busca = {}

            if (data) busca.data = data
            if (cardapio) busca.cardapio = cardapio

            const dados = await cardapios.find(busca)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).json(dados)
        } catch (err) {
            return next(err, req, res)
        }
    }

    static adicionaCardapios = async (req, res, next) => {
        try {
            const {data, cardapio} = req.body
            const newCardapio = new cardapios({
                data: data,
                cardapio: cardapio,
            })
            const dadosEnvio = await newCardapio.save()
            return res.status(201).send(dadosEnvio)
        } catch (err) {
            return next(err, req, res)
        } 
    }

    static atualizaCardapios = async (req, res, next) => {
        try {
            const {id} = req.params
            const {data, cardapio} = req.body
            const busca = {}
            if (data) busca.data = data
            if (cardapio) busca.cardapio = cardapio
            const dados = await cardapios.findByIdAndUpdate(id, busca)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send({message: `Id(${id}) foi atualizado com sucesso!`})
        } catch (err) {
            return next(err, req, res)
        }
    }

    static deletaCardapios = async (req, res, next) => {
        try {
            const id = req.params.id
            const dados = await cardapios.findByIdAndDelete(id)
            if (!dados) {
                return res.status(404).send({message: "Dados não encontrados!"})
            }
            return res.status(200).send({message: "Deletado com Sucesso!"})
        } catch (err) {
            return next(err, req, res)
        }
    }
}

export default cardapioController
