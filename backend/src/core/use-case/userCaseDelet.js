import {IUserDeleteUseCase} from '../port/serve/portUserCase.js'

export class DeletUseCase extends IUserDeleteUseCase{
    constructor(repository){
        super();
        this.repository = repository
    }

    async execute(dto){
        const userExists = await this.repository.findByUser(dto.user);
        
        if (!userExists) {
            throw new Error("Este usuário não existe");
        }

        const idExists = await this.repository.findById(dto.id);

        if(!idExists){
            throw new Error("Este usuário não existe");
        }

        if(dto.admin){
            if(userExists.id == dto.id){
                throw new Error("Este usuário está logado no momento");
            }
        }else{
            if(userExists.id != dto.id){
                throw new Error("Você não pode deletar outro usuário");
            }
        }

    
     return await this.repository.deleteUser(userExists.id);   
    }
}