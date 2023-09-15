import usuarios from "../models/Usuario.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export const secret_key = process.env.SETTINGS_TOKEN;

class usuarioController {

    static loginUsuario = async (req, res) => {
        try {
            const { usuario, password, role } = req.body;
            const user = await usuarios.findOne({
                usuario: usuario,
                role: role
            }).populate("role")
            if(user) {
                try {
                    const correctPassword = await bcrypt.compare(password, user.password)
                    if (correctPassword) {
                        const token = jwt.sign({
                            usuario: usuario,
                            role: role
                        }, secret_key)
                        return res.status(200).send({message: token})
                    } else {
                        return res.status(404).send({message: "Senha incorreta!"})
                    }
                } catch (err) {
                    return res.status(401).send({Erro: "Credenciais Erradas" + err})
                }
            } else {
                return res.status(404).send({message: "usuario não encontrado!"})
            }   
        } catch (err) {
            return res.status(500).json({Erro: "Erro ao acessar tela de Login: " + err})
        }
    }

    static criaUsuario = async (req, res) => {
        try {
            const saltRounds = 10;
            const { usuario, password, role } = await req.body;
            const hashSenha = await bcrypt.hash(password, saltRounds);
            const newUser = new usuarios({
                usuario: usuario,
                password: hashSenha,
                role: role
            });

            const dadosEnvio = await newUser.save()
            const userRole = await usuarios.findById(dadosEnvio._id).populate('role');
            return res.status(201).json(userRole)
        } catch (err) {
            return res.status(500).send({erro: "Erro ao adicionar usuario: "+err})
        }
    }

    static reseteSenhaUsuario = async (req, res, next) => {
        try {
            const {usuario, role, password} = await req.body
            const saltRounds = 10;
            const hashSenha = await bcrypt.hash(password, saltRounds)
            const usuarioDados = await usuarios.findOneAndUpdate({
                usuario: usuario,
                role: role
            }, {
                password: hashSenha
            })
            if (usuarioDados) {
                return res.status(200).send({message: "Atualizado com sucesso!"})
            } else {
                return res.status(404).send({message: "Usuario não encontrado!"})
            }
        } catch (err) {
            return next(err, req, res)
        }
    }
}

export default usuarioController
