import {validateEmail} from '../../shared/utils/validators/validatorEmail.js'
import {validateCPF} from '../../shared/utils/validators/validatorCpf.js'
import {IUserRegisterUseCase} from '../port/serve/portRegister.js'

export class RegisterUseCase extends IUserRegisterUseCase{
    constructor(repository){
        super();
        this.repository = repository
    }

    async execute(dto){
        const validatorEmail = validateEmail(data.email)
        if (!validatorEmail){
            throw new Error("O email deve ser valido");
        }

        const validatorCpf = validateCPF(data.cpf)

        if (!validatorCpf){
            throw new Error("O cpf deve ser valido");
        }

        const userExists = await this.repository.findByUser(dto.user);
        
        if (userExists) {
            throw new Error("Este nome de usuário já está em uso.");
        }

        return await this.repository.insertUser(dto);   
    }
}