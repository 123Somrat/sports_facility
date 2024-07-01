import { ObjectId } from "mongodb";
import bookingInterface from "../../model/booking/bookingInterface";
import bookingModel from "../../model/booking/bookingSchema";
import facilityModel from "../../model/facility/facilitySchema";
import calculateTimeDiffernce from "../../utils/calculateTimeDifference";
import HttpError from "../../utils/httpError";

/**
 *
 * @param userId
 * @param paylode
 * Checked given facilityId facility is exeist or not
 * if facility not exeist throw an not found error
 * if given facility id facility is deleted then throw a not found error also
 * Calculate time diff useing utils function
 * Calculate payable amount
 * Finally checked everything then store the data in db
 */
const createBooking = async (userId: string, paylode: bookingInterface) => {
  const { startTime, endTime } = paylode;

  // Retrive facility with id
  const isFacilityExiest = await facilityModel.findById(paylode.facilityId);

  // Throwing error is given id facility not exiest
  if (!isFacilityExiest) {
    throw new HttpError(404, "Not found", "Facility not Exiest");
  }

  // Isfacility deletd throw not found error
  if (isFacilityExiest.isDeleted) {
    throw new HttpError(404, "Not Found", "Facility Not exiest");
  }


  // Call the calculate time differnce utils function
  const timeDifference = Math.abs(calculateTimeDiffernce(startTime, endTime));

  // Calculate price
  const payableAmount = Number(
    (timeDifference * isFacilityExiest.pricePerHour).toFixed(2)
  );

  // Transformed object which we store in db
  const trandFormedBookingInfo = {
    facilityId: new ObjectId(paylode.facilityId),
    date: paylode.date,
    startTime: paylode.startTime,
    endTime: paylode.endTime,
    user: new ObjectId(userId),
    payableAmount: payableAmount,
    isBooked: "confirmed",
  };

  // Create the booking in db
  const bookingConfirmation = await bookingModel.create(trandFormedBookingInfo);
  return bookingConfirmation;
};


/**
 * 
 * @returns allBookings
 */

const getAllBookings = async ()=> {

    const bookings = await bookingModel.find({})

  
   return bookings
}








export = { createBooking , getAllBookings };
