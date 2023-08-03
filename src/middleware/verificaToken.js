import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { secret_key } from '../controller/usuarioController.js';


async function verificaToken(req, res, next) {
    const token = await req.headers.authorization;

    if(!token) {
        return res.status(401).send({message: "Token não fornecido!"})
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], secret_key)
        console.log(decoded)
        return next();
    } catch(err) {
        return res.status(401).send({erro: "Token inválido => "+err})
    }
}

export default verificaToken
