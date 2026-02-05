export class GetUseCase {
    constructor(repositoryPort) {
        this.repository = repositoryPort;
    }

    async execute() {
        const users = await this.repository.findAll();

        // 2. Lógica de negócio: Ocultar dados sensíveis (exemplo)
        return users.map(users => {
            const { password, ...safeData } = users;
            return safeData;
        });
    }
}