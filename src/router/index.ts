import expres from 'express'
import { controllers as userControllers } from '../api/v1/user';

const router = expres.Router();



router.route('/api/v1/auth/register')
.post(userControllers.register)



export default router;