import { DataTypes } from 'sequelize';
import dbConfig from '../../../config/configDB.js';

const User = dbConfig.define('User',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        admin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

},
{
    tableName: 'Users',  
    freezeTableName: true // Impede o Sequelize de tentar pluralizar o nome
});

export default User;