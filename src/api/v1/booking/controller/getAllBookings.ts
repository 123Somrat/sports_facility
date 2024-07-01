import asyncHandeler from "../../../../utils/asyncHandeler";
import bookingsService from "../../../../lib/booking";

const getAllBookings = asyncHandeler(async (_req, res) => {
  // Call getAllBookings service
  const bookings = await bookingsService.getAllBookings();

  // Send all retrived bookings as a response
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Bookings retrieved successfully",
    data: bookings,
  });
});

export default getAllBookings;
