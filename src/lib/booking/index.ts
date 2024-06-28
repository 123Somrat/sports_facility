import bookingInterface from "../../model/booking/bookingInterface";
import bookingModel from "../../model/booking/bookingSchema";



const createABooking =async (userId:string,paylode:bookingInterface)=>{
    console.log(userId,paylode)
 const trandFormedBookingInfo = ''
 //const data = await bookingModel.create()


}


export = { createABooking }