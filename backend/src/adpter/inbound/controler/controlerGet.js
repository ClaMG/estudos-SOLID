export class ControllerGet {
    constructor(getUseCase) {
        this.useCase = getUseCase;
    }

    async handle(req, res) {
        try {
            const users = await this.useCase.execute(); 
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar usuários",  });
        }
    }
}