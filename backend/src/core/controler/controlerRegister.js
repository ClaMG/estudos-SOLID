import {RegiterUserdto} from '../dto/dtoRegister.js'


export class ControlerRegister{
    constructor(registerUseCase) {
        this.useCase = registerUseCase;
    }

    async handle(req, res) {
        try {
            const userDTO = new RegiterUserdto(req.body);

            const result = await this.useCase.execute(userDTO);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}