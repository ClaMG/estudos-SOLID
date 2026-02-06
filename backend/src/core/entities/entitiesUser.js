import {validateEmail} from '../../shared/utils/validators/validatorEmail.js'
import {validateCPF} from '../../shared/utils/validators/validatorCpf.js'

export class User {
    constructor(dto) {
        console.log("Dados recebidos na Entidade:", dto);
        this.id = dto.id;
        this.user = dto.user;
        this.password = dto.password;
        this.email = dto.email;
        this.cpf = dto.cpf;
        this.admin = dto.admin || false;

        this.validate();
    }

    validate() {
        const validatorEmail = validateEmail(this.email)
        if (!validatorEmail){
            throw new Error("O email deve ser valido");
        }

        const validatorCpf = validateCPF(this.cpf)

        if (!validatorCpf){
            throw new Error("O cpf deve ser valido");
        }
    }

}