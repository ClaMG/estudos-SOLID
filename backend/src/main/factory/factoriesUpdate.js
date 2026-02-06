import { UserRepositories } from '../../adpter/outbound/repositories/repositoriesUsers.js';
import { UpdateUseCase } from '../../core/use-case/userCaseUpdate.js';
import {ControlerUpdate} from '../../adpter/inbound/controler/controlerUpdate.js'
import User from '../../adpter/outbound/models/usersModel.js';


export const makeUpdateController = () => {
    //Instancia o Adaptador de Banco de Dados
    const userRepository = new UserRepositories(User);

    //Instancia o Caso de Uso injetando o repositório
    const updateUseCase = new UpdateUseCase(userRepository);

    //Instancia o Adaptador do Controller injetando o caso de uso
    const updateController = new ControlerUpdate(updateUseCase);

    return updateController;
};
