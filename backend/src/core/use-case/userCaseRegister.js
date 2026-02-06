import {IUserRegisterUseCase} from '../port/serve/portUserCase.js'
import {User} from '../entities/entitiesUser.js'
import {generateRandomPassword} from '../../shared/utils/security/randomPassword.js'
import {hashPassword} from '../../shared/utils/security/encryptPassword.js'
import MailProvider from '../../shared/utils/to_send/toSendEmail.js'

export class RegisterUseCase extends IUserRegisterUseCase{
    constructor(repository){
        super();
        this.repository = repository
    }

    async execute(dto){
       const userEntity = new User(dto);

        const userExists = await this.repository.findByUser(userEntity.user);
        
        if (userExists) {
            throw new Error("Este nome de usuário já está em uso.");
        }
        
        const emailExists = await this.repository.findByEmail(userEntity.email);
        
        if (emailExists) {
            throw new Error("Este email já está em uso.");
        }
        const passwordRandom = generateRandomPassword(8)
        const passwordSecurity = await hashPassword(passwordRandom)

        const sendEmails = await MailProvider.sendEmail(userEntity.email, userEntity.user, passwordRandom);

        if(!sendEmails){
            throw new Error("Erro ao enviar senha para o email");
        }

        const data ={
            user: userEntity.user,
            password: passwordSecurity,
            email: userEntity.email,
            cpf: userEntity.cpf,
            admin: userEntity.admin
        }

        const crateUser = await this.repository.createUsers(data)

        if(!crateUser){
            throw new Error("Erro ao criar usuario");
        }

        return {
            mensage:"Usuario criado com sucesso",
            email: "Verifique o email cadastrado"
        };   
    }
}