export class ByUserUseCase{
    constructor(repository){
        this.repository = repository
    }

    async execute(dto){
        const user = dto.user
    
     return await this.repository.findByUser(user);   
    }
}