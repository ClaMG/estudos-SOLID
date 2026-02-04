import { Sequelize } from 'sequelize';
import dbConfig from '../src/config/configDB.js'; // A extensão .js é obrigatória no modo import!

const sequelize = new Sequelize(dbConfig);

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão estabelecida com sucesso!');
    console.log(`Banco: ${dbConfig.database} | Dialeto: ${dbConfig.dialect}`);
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco:');
    console.error('Erro:', error.message);
  } finally {
    await sequelize.close();
  }
}

checkConnection();