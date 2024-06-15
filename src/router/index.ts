import expres from 'express'
import { controllers as userControllers } from '../api/v1/user';
import { controllers as facilityControllers } from '../api/v1/facility';
import requestValidation from '../middleWare/requestValidation';
import userAuthenticationMiddleWare from '../middleWare/userAuthenticationMiddleWare';

const router = expres.Router();


// Auth route
router.post('/api/v1/auth/register',requestValidation,userControllers.register)
router.post('/api/v1/auth/login',requestValidation,userControllers.login)

// Facility
router.route('/api/v1/facilitys')
.post(requestValidation,userAuthenticationMiddleWare,facilityControllers.createFacility)


export default router;