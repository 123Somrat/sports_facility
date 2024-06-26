import expres from 'express'
import { controllers as userControllers } from '../api/v1/user';
import { controllers as facilityControllers } from '../api/v1/facility';
import requestValidation from '../middleWare/requestValidation';
import userAuthenticationMiddleWare from '../middleWare/userAuthenticationMiddleWare';
import hasPermission from '../middleWare/hasPermission';


const router = expres.Router();


// Auth route
router.post('/api/v1/auth/register',requestValidation,userControllers.register)
router.post('/api/v1/auth/login',requestValidation,userControllers.login)

// Facility
router.route('/api/v1/facilitys')
.get(userAuthenticationMiddleWare,hasPermission,facilityControllers.getAllFacilitys)
.post(requestValidation,userAuthenticationMiddleWare,hasPermission,facilityControllers.createFacility)

// Update facility and delete a afcility
router.route('/api/v1/facilitys/:id')
.patch(requestValidation,userAuthenticationMiddleWare,hasPermission,facilityControllers.updateFacility)




export default router;