import { UserRepositories } from '../../adpter/outbound/repositories/repositoriesUsers.js';
import { LoginUseCase } from '../../core/use-case/userCaseLogin.js';
import {ControlerLogin} from '../../adpter/inbound/controler/controlerLogin.js'
import User from '../../adpter/outbound/models/usersModel.js';


export const makeloginController = () => {
    //Instancia o Adaptador de Banco de Dados
    const userRepository = new UserRepositories(User);

    //Instancia o Caso de Uso injetando o repositório
    const loginUseCase = new LoginUseCase(userRepository);

    //Instancia o Adaptador do Controller injetando o caso de uso
    const loginController = new ControlerLogin(loginUseCase);

    return loginController;
};
