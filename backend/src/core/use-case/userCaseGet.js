import {IUserGetUseCase} from '../port/serve/portUserCase.js'
export class GetUseCase extends IUserGetUseCase{
    constructor(repository) {
        super();
        this.repository = repository;
    }

    async execute() {
        const users = await this.repository.findAllUsers();

        //Ocultar dados sensíveis 
        return users.map(users => {
            const { password, ...safeData } = users;
            return safeData;
        });
    }
}