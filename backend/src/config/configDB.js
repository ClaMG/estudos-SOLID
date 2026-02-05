import 'dotenv/config';//carregar o .env

import { Sequelize } from 'sequelize';

const connection = new Sequelize(
  process.env.DB_NAME,     // Banco de dados
  process.env.DB_USER,     // Usuário
  process.env.DB_PASSWORD, // Senha
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, // Aqui ele espera uma string 'mysql', 'postgres', etc.
    logging: false,
    define: {
      timestamps: false,
      underscored: true,
    }
  }
);

export default connection;