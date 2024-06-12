import expres from 'express'
import { controllers as userControllers } from '../api/v1/user';
import userValidation from '../middleWare/userValidation';

const router = expres.Router();



router.route('/api/v1/auth/register')
.post(userValidation,userControllers.register)



export default router;