import {IUserUpdateUseCase} from '../port/serve/portUserCase.js'
import {User} from '../entities/entitiesUser.js'
export class UpdateUseCase extends IUserUpdateUseCase{
    constructor(repository){
        super();
        this.repository = repository
    }
    
    async execute(dto){
        const userEntity = new User(dto);

         const existUserUpdated  = await this.repository.findByUser(dto.userUpdated);

        if(!existUserUpdated){
            throw new Error("Este usuário não existe");
        }
        
        const idExists = await this.repository.findById(userEntity.id);

        if(!idExists){
            throw new Error("Este usuário não existe");
        }

        if(!existUserUpdated.admin && existUserUpdated.id != userEntity.id){
            throw new Error("Você não pode alterar outros usuários");
        }

        if(userEntity.user != idExists.user){
            const existUser = await this.repository.findByUser(userEntity.user);
            if(existUser && existUser.id != userEntity.id){
                throw new Error("Este nome de usuário já está em uso.");
            }
        }
        
        if(userEntity.email != idExists.email){
            const emailExists = await this.repository.findByEmail(userEntity.email);
            if(emailExists && emailExists.id != userEntity.id){
                throw new Error("Este email já está em uso.");
            }
        }

        const data ={
            user: userEntity.user,
            email: userEntity.email,
            cpf: userEntity.cpf,
            admin: userEntity.admin
        }

        const updateUser = await this.repository.updateUser(userEntity.id, data)

        if(!updateUser){
            throw new Error("Erro ao atulizar usuario");
        }

        return {
            mensage: "Usuário atualizado com sucesso"
        };   
    }

}