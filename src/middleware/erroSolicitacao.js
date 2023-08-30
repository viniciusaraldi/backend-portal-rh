
export default function erroSolicitacao(err, req, res, next) {
    res.status(500).json({
        message: "Erro interno de servidor", 
        status: err.message
    });
}
