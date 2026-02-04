import User from './models/usersModel'

export class UserRepositories {

    async insertUser(dados) {
        return await User.create(dados);
    }

    
}