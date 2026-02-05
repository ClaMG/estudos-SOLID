import { RegiterUserdto } from '../../../core/dto/dtoRegister.js';

export class ControlerRegisterAdapter {
    constructor(registerUseCase) {
        this.registerUseCase = registerUseCase;
    }

    async handle(req, res) {
        try {
            const userDTO = new RegiterUserdto(req.body);

            const result = await this.registerUseCase.execute(userDTO);

            return res.status(201).json({
                message: "Usuário registrado com sucesso!",
                data: result
            });

        } catch (error) {
            console.error("Erro no Registro:", error.message);
            
            return res.status(400).json({
                error: error.message
            });
        }
    }
}