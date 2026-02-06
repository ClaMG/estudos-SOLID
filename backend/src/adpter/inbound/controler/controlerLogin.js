import {LoginUserdto} from '../dto/dtoLogin.js'

export class ControlerLogin{
    constructor(loginUseCase) {
        this.useCase = loginUseCase;
    }

    async handle(req, res) {
        try {
            const userDTO = new LoginUserdto(req.body);

            const result = await this.useCase.execute(userDTO);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}