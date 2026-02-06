import express from 'express';
import cors from 'cors';
import routerAdmin from '../adpter/inbound/routes/routesAdmin.js'; 
import routerUser from '../adpter/inbound/routes/routesUser.js';
const app = express();

app.use(cors());

// Configurações de Segurança
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/admin', routerAdmin)
app.use('/user', routerUser)

app.use((err, req, res, next) => {
    console.error('Erro não tratado:', err.stack);
    res.status(500).json({ message: 'Ocorreu um erro interno no servidor.', stack: err.stack });
});

export default app;