import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { secret_key } from '../controller/usuarioController.js';
import roles from '../models/Role.js'


async function verificaToken(req, res, next) {
    const token = await req.headers.authorization;
    if(!token) {
        return res.status(401).json({message: "Token não fornecido!"})
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], secret_key)
        const roleUser = await buscaRoleUser(decoded)
        if (roleUser === 'ti' || roleUser === 'restaurante') {
            return next();
        } else {
            return res.status(403).send({
                success: false,
                status: 403,
                message: "Acesso não autorizado"
            });
        }
    } catch(err) {
        return res.status(401).json({erro: "Token inválido => "+err})
    }
}

async function buscaRoleUser(data) {
    try {
        const dataComplete = await roles.findById({
            _id: data.role
        })
        return dataComplete.role
    } catch (err) {
        return false;
    }
} 

export default verificaToken
