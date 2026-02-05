import { where } from 'sequelize'
import User from './models/usersModel.js'
import { IAdapterDb } from '../../../core/port/db/portRespostory.js'

export class UserRepositories extends IAdapterDb{
    constructor(userModel) {
        super();
        this.model = userModel; 
    }

    async createUsers(data){
        return await this.model.create(data)
    }

    async findAllUsers(){
        return await this.model.findAll({ raw: true }) //para que os dados venham "limpos"
    }

    async deleteUser(id){
        return await this.model.destroy({
            where: {id: id}
        })
    }

    async updateUser(id, data){
        const [affectedRows] = await this.model.update(data, { //para saber se foi atualizado
            where: { id: id }
        });
        return affectedRows > 0;
    }

    async findByUser(user){
        return await this.model.findOne({
            where: {user: user},
            raw: true 
        })
    }

    
}