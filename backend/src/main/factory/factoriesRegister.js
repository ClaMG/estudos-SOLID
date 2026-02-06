import { UserRepositories } from '../../adpter/outbound/repositories/repositoriesUsers.js';
import { RegisterUseCase } from '../../core/use-case/UserCaseRegister.js';
import {ControlerRegister} from '../../adpter/inbound/controler/controlerRegister.js'
import User from '../../adpter/outbound/models/usersModel.js';


export const makeRegisterController = () => {
    //Instancia o Adaptador de Banco de Dados
    const userRepository = new UserRepositories(User);

    //Instancia o Caso de Uso injetando o repositório
    const registerUseCase = new RegisterUseCase(userRepository);

    //Instancia o Adaptador do Controller injetando o caso de uso
    const registerController = new ControlerRegister(registerUseCase);

    return registerController;
};
