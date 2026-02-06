import 'dotenv/config';//carregar o .env

import { Sequelize } from 'sequelize'; // Importa a classe do Sequelize

// 1. Criamos a instância de conexão usando as variáveis do seu .env
const dbConfig = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, 
    logging: false, // Para não encher o console de logs SQL
    define: {
      timestamps: false,
      underscored: true,
      underscoredAll: true
    }
  }
);

// 2. Exportamos o objeto dbConfig já INSTANCIADO
export default dbConfig;