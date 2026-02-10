import {validateEmail} from '../../shared/utils/validators/validatorEmail.js'
import {validateCPF} from '../../shared/utils/validators/validatorCpf.js'

export class User {

    constructor(dto) {
        console.log("Dados recebidos na Entidade:", dto);
        /** @type {string} */
        this.id = dto.id;
        /** @type {string} */
        this.user = dto.user;
        /** @type {string} */
        this.password = dto.password;
        /** @type {string} */
        this.email = dto.email;
        /** @type {string} */
        this.cpf = dto.cpf;
        /** @type {boolean} */
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