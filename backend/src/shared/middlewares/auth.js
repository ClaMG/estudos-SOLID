import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;//Pega o token

    if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

    const [, token] = authHeader.split(' '); // Separa "Bearer <token>"

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // Agora qualquer rota pra frente sabe quem é o usuário
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};