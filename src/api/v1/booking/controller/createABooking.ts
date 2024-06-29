import asyncHandeler from "../../../../utils/asyncHandeler";
import bookingService from "../../../../lib/booking";

const createABooking = asyncHandeler(async (req, res) => {
  // destructure userId and bookingInfo from req
  const userId = req.user.paylode.id;
  const bookingInfo = req.body;

  // Call CreateBooking service with needed argument
  const bookings = await bookingService.createABooking(userId, bookingInfo);

  // send Created bookings as a response
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Booking created successfully",
    data: bookings,
  });
});

export default createABooking;
