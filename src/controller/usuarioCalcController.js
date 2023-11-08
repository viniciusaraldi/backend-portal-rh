import usuarioCalc from "../models/UsuarioCalc.js";

class usuarioCalcController {

    static listaUsuarioCalc = async (req, res, next) => {
        try {
            const dados = await usuarioCalc.find()
            if (dados.length === 0) {
                return res.status(404).send({message: "Não há registro na calculadora!"})
            }
            return res.status(200).json(dados)
        } catch (err) {
            return next(err, req, res)
        } 
    }

    static listaUsuarioCalcID = async (req, res, next) => {
        try {
            const {id} = req.params
            const dados = await usuarioCalc.findOne({_id: id})
            if (dados === null || dados === undefined || !dados) {
                return res.status(404)
            }
            return res.status(200).json(dados)
        } catch (err) {
            return next(err, req, res)
        } 
    }

    static adicionaUsuarioCalc = async (req, res, next) => {
        try {
            const {nome, setor,qtdeCopo} = await req.body
            const dados = new usuarioCalc({
                nome: nome,
                setor: setor,
                qtdeCopo: qtdeCopo
            });
            const enviaDados = await dados.save();
            return res.status(201).send(enviaDados)
        } catch (err) {
            return next(err, req, res)
        }
    }

    static calculoCo = async (req, res, next) => {
        try {
            const dados = await usuarioCalc.find()
            let info = 0;
            dados.forEach(dado => {
                info += dado.qtdeCopo
            });
            return res.status(200).json({
                dados: info,
                message: `Tem ${info} copos reutilizaveis`
            })
        } catch (err) {
            return next(err, req, res)
        }
    }
    
    static atualizaUsuarioCalc = async (req, res, next) => {
        try {
            const dados = await usuarioCalc.findById(req.params.id)
            if (dados.lenght !== 0) {
                dados.qtdeCopo += req.body.qtdeCopo
                dados.save()
                return res.status(200).json(dados)
            }
            return res.status(404).json({message: "Não foi encontrado nenhuma informação"})
        } catch (err) {
            return next(err, req, res)
        }
    }

    static deletaUsuarioCalc = async (req, res, next) => {
        try {
            const {id} = req.params
            await usuarioCalc.findByIdAndDelete(id)
            return res.status(200).json({message: `dados excluido: ${id}`})
        } catch (err) {
            return next(err, req, res)
        }
    }

}

export default usuarioCalcController
