import expres from 'express'
import { controllers as userControllers } from '../api/v1/user';
import { controllers as facilityControllers } from '../api/v1/facility';
import userValidation from '../middleWare/userValidation';
import loginDataValidation from '../middleWare/loginDataValidation';

const router = expres.Router();


// Auth route
router.post('/api/v1/auth/register',userValidation,userControllers.register)
router.post('/api/v1/auth/login',loginDataValidation,userControllers.login)

// Facility
router.route('/api/v1/facilitys')
.post(facilityControllers.createFacility)


export default router;