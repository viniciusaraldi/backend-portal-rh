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
                usuario: usuario
            });
            try {
                if (user) {
                    const correctPassword = await bcrypt.compare(password, user.password)
                    if (correctPassword) {
                        const token = jwt.sign({usuario: usuario}, secret_key)
                        return res.status(200).send({message: token})
                    } else {
                        return res.status(401).send({message: "Senha Inválida, por favor verifique!"})
                    }
                } else {
                    return res.status(401).send({message: "Senha Inválida, por favor verifique"})
                }
            } catch (err) {
                return res.status(500).send({Erro: "Erro ao validar usuario " + err})
            }
        } catch (err) {
            return res.status(500).send({Erro: "Erro ao acessar tela de Login " + err})
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
            return res.status(201).send(dadosEnvio)
        } catch (err) {
            return res.status(500).send({erro: "Erro ao adicionar usuario => "+err})
        }
    }
}

export default usuarioController
