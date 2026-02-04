import app from './app.js';
import dbConfig from '../config/configDB.js';
import { Sequelize } from 'sequelize';

const PORT = process.env.PORT

async function startserver() {
    try {
        const sequelize = new Sequelize(dbConfig);
        await sequelize.authenticate();
        console.log('Conexão bem sucedida com o banco de dados')

        await sequelize.sync({ force: true }); 
        console.log('Modelos sincronizados.');

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`)
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error)
        process.exit(1)
    }
}

startserver()