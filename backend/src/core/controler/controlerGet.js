export class ControllerByUser {
    constructor(getUserUseCase) {
        this.useCase = getUserUseCase;
    }

    async handleGet(req, res) {
        try {
            const users = await this.useCase.execute(); 
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar usuários" });
        }
    }
}