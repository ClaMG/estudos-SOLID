import {DeletUserdto} from '../dto/dtoDelete.js'
 
export class ControlerDelete{
    constructor(deleteUseCase) {
        this.useCase = deleteUseCase;
    }

    async handle(req, res) {
        try {
            const userDTO = new DeletUserdto(req.body);

            const result = await this.useCase.execute(userDTO);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}