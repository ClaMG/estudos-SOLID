import { Router } from 'express';
import { makeRegisterController } from '../../../main/factory/factoriesRegister.js';
import { makeDeletController } from '../../../main/factory/factoriesDelet.js';
import { makeGetController } from '../../../main/factory/factoriesGet.js';
import { makeUpdateController } from '../../../main/factory/factoriesUpdate.js';
import { makeloginController } from '../../../main/factory/factoriesLogin.js';
import {authMiddleware} from '../../../shared/middlewares/auth.js'
import {adminMiddleware} from '../../../shared/middlewares/authAdm.js'
const router = Router();

const registerController = makeRegisterController();
const deletController = makeDeletController();
const getController = makeGetController();
const updateController = makeUpdateController();
const loginController = makeloginController();


router.get('/read', authMiddleware, adminMiddleware, (req, res) => getController.handle(req, res))
router.post('/register', authMiddleware, adminMiddleware, (req, res) => registerController.handle(req, res));
router.put('/update', authMiddleware, (req, res) => updateController.handle(req, res));
router.delete('/delete', authMiddleware, (req, res) => deletController.handle(req, res))
router.post('/login', (req, res) => loginController.handle(req, res))

export default router;