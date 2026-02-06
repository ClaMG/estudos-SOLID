import {IUserLoginUseCase} from '../port/serve/portUserCase.js'
import {comparePassword} from '../../shared/utils/security/encryptPassword.js'
import jwt from 'jsonwebtoken';

export class LoginUseCase extends IUserLoginUseCase{
    constructor(repository){
        super();
        this.repository = repository
    }

    async execute(dto){
         const userExists = await this.repository.findByUser(dto.user);
        
        if (!userExists) {
            throw new Error("Usuário não encontrado");
        }
        
        const validatePasswor = await comparePassword(dto.password, userExists.password);

        if(!validatePasswor){
            throw new Error("Senha incorreta");
        }

        const token = jwt.sign(
            {id: userExists.id, admin: userExists.admin}, 
            process.env.JWT_SECRET || 'chave_mestra_temporaria_123', 
            { expiresIn: '1d' }
        );

        return {
            mensage: "Usuario logado",
            token: token
        };
        
    }
}