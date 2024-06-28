import expres from 'express'
import { controllers as userControllers } from '../api/v1/user';
import { controllers as facilityControllers } from '../api/v1/facility';
import { controller as bookingControllers}from '../api/v1/booking';
import requestValidation from '../middleWare/requestValidation';
import userAuthenticationMiddleWare from '../middleWare/userAuthenticationMiddleWare';
import hasPermission from '../middleWare/hasPermission';


const router = expres.Router();


// Auth route
router.post('/api/v1/auth/register',requestValidation,userControllers.register)
router.post('/api/v1/auth/login',requestValidation,userControllers.login)

// Create and Get Facility
router.route('/api/v1/facilitys')
.get(userAuthenticationMiddleWare,hasPermission,facilityControllers.getAllFacilitys)
.post(requestValidation,userAuthenticationMiddleWare,hasPermission,facilityControllers.createFacility)

// Update and Delete a afcility
router.route('/api/v1/facilitys/:id')
.patch(requestValidation,userAuthenticationMiddleWare,hasPermission,facilityControllers.updateAFacility)
.delete(userAuthenticationMiddleWare,hasPermission,facilityControllers.deleteAFacility)


// Create and Get Booking
router.post('/api/v1/bookings',requestValidation,userAuthenticationMiddleWare,hasPermission,bookingControllers.createABooking)



export default router;