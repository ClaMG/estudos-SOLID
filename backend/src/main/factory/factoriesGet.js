import { UserRepositories } from '../../adpter/outbound/repositories/repositoriesUsers.js';
import { GetUseCase } from '../../core/use-case/userCaseGet.js';
import {ControllerGet} from '../../adpter/inbound/controler/controlerGet.js'
import User from '../../adpter/outbound/models/usersModel.js';


export const makeGetController = () => {
    //Instancia o Adaptador de Banco de Dados
    const userRepository = new UserRepositories(User);

    //Instancia o Caso de Uso injetando o repositório
    const getUseCase = new GetUseCase(userRepository);

    //Instancia o Adaptador do Controller injetando o caso de uso
    const getController = new ControllerGet(getUseCase);

    return getController;
};
