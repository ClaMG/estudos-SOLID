import 'dotenv/config';//carregar o .env

export default{
  // Drive 
  dialect: process.env.DB_DIALECT, 
  
  // Endereço e porta 
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  
  // Credenciais
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  // Configurações extras
  define: {
    timestamps: false,        
    underscored: true,        
    underscoredAll: true
  },
  
  logging: false

};