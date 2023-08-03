import jwt from 'jsonwebtoken';

const frase = 'my_secret'

const token = jwt.sign(
    {
        usuario: "vinicius",
        senha: "v1i2n3i4",
        role: "ti"
    }, frase);

const decoded = jwt.verify(token, frase)

console.log(token)
console.log(decoded)

export const verificaToken = async (req, res, next) => {
    try {
        let tokenRecebido = await req.headers.authorization.split(' ')[1];
        console.log("TokenRecebido: " + tokenRecebido)
    
        let decoded1 = jwt.verify(token, frase);
        console.log("Decodificado: " + decoded1.usuario)
    
        if(tokenRecebido === '' || !tokenRecebido) {
            return res.status(401).send({message: "Token não fornecido!"})
        }
    
        try {
            const decoded = jwt.verify(tokenRecebido, frase);
            console.log(decoded)
            next();
        } catch (err) {
            return res.status(401).send({message: "Token Inválido! => "+err})
        }
    } catch (err) {
        return res.status(500).send({message: "Erro de servidor, causado por: " + err})
    }

}
