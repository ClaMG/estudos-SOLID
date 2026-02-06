import {UpdateUserdto} from '../dto/dtoUpdate.js'


export class ControlerUpdate{
    constructor(updateUseCase) {
        this.useCase = updateUseCase;
    }

    async handle(req, res) {
        try {
            const userDTO = new UpdateUserdto(req.body);

            const result = await this.useCase.execute(userDTO);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}