import {ByUserdto} from '../dto/dtoByUser'
 

export class ControlerRegister{
    constructor(byUserUseCase) {
        this.useCase = byUserUseCase;
    }

    async handle(req, res) {
        try {
            const userDTO = new ByUserdto(req.body);

            const result = await this.useCase.execute(userDTO);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}