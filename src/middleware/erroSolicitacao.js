
export default function erroSolicitacao(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        message: "Erro interno de servidor", 
        status: err.message
    });
}
