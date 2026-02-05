export class DeletUseCase{
    constructor(repository){
        this.repository = repository
    }

    async execute(dto){
        const id = dto.id
    
     return await this.repository.deleteUser(id);   
    }
}