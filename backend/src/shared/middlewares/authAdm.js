export const adminMiddleware = (req, res, next) => {
    // Verifica se a propriedade existe e se é estritamente verdadeira
    if (req.userAdmin !== true) {
        return res.status(403).json({ 
            error: 'Acesso negado: Esta rota é exclusiva para administradores.' 
        });
    }

    return next();
};