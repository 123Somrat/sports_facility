import asyncHandeler from "../../../../utils/asyncHandeler";
import bookingService from '../../../../lib/booking'

const createABooking = asyncHandeler(async(req,res)=>{
     // destructure userId and bookingInfo from req
     const userId = req.user.paylode.id;
     const bookingInfo = req.body
   
     // Call CreateBooking service with needed argument
   const bookings = await bookingService.createABooking(userId,bookingInfo)
   console.log(bookings)

})

export default createABooking