import {validateEmail} from '../../shared/utils/validators/validatorEmail.js'
import {validateCPF} from '../../shared/utils/validators/validatorCpf.js'

export class UpdateUseCase{
    constructor(repository){
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

        return await this.repository.updateUser(id, dto);   
    }

}