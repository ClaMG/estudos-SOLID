import { UserRepositories } from '../../adpter/outbound/repositories/repositoriesUsers.js';
import { DeletUseCase } from '../../core/use-case/userCaseDelet.js';
import {ControlerDelete} from '../../adpter/inbound/controler/controlerDelete.js'
import User from '../../adpter/outbound/models/usersModel.js';


export const makeDeletController = () => {
    //Instancia o Adaptador de Banco de Dados
    const userRepository = new UserRepositories(User);

    //Instancia o Caso de Uso injetando o repositório
    const deleteUseCase = new DeletUseCase(userRepository);

    //Instancia o Adaptador do Controller injetando o caso de uso
    const deleteController = new ControlerDelete(deleteUseCase);

    return deleteController;
};
