import { Router } from 'express';
import {ControlerRegisterAdapter} from '../controler/controlerRegister.js'
import { RegisterUseCase } from '../../../core/use-case/UserCaseRegister.js'; 
import {UserRepositories} from '../../exit/repositories/repositoriesUsers.js'

import User from '../../exit/repositories/models/usersModel.js'
const router = Router();

const userRepository = new UserRepositories(User);

const registerUseCase = new RegisterUseCase(userRepository);
const controller = new ControlerRegisterAdapter(registerUseCase);

router.post('/register', (req, res) => controller.handle(req, res));
router.get('/test', (req, res) => res.send("A rota admin está funcionando!"));  

export default router;