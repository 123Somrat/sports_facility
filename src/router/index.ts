import expres from 'express'
import { controllers as userControllers } from '../api/v1/user';
import { controllers as facilityControllers } from '../api/v1/facility';
import { controller as bookingControllers}from '../api/v1/booking';
import requestValidation from '../middleWare/requestValidation';
import userAuthenticationMiddleWare from '../middleWare/userAuthenticationMiddleWare';
import authorize from '../middleWare/authorize';


const router = expres.Router();


// Auth route
router.post('/api/v1/auth/register',requestValidation,userControllers.register)
router.post('/api/v1/auth/login',requestValidation,userControllers.login)

// Create and Get Facility
router.route('/api/v1/facilitys')
.get(userAuthenticationMiddleWare,authorize(['admin']),facilityControllers.getAllFacilitys)
.post(requestValidation,userAuthenticationMiddleWare,authorize(['admin']),facilityControllers.createFacility)

// Update and Delete a afcility
router.route('/api/v1/facilitys/:id')
.patch(requestValidation,userAuthenticationMiddleWare,authorize(['admin']),facilityControllers.updateAFacility)
.delete(userAuthenticationMiddleWare,authorize(['admin']),facilityControllers.deleteAFacility)


// Create and Get Booking
router.route('/api/v1/bookings')
.get(userAuthenticationMiddleWare,authorize(['admin']),bookingControllers.getAllBookings)
.post(requestValidation,userAuthenticationMiddleWare,authorize(['user']),bookingControllers.createBooking)



export default router;