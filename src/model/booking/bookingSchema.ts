import { Schema, model } from "mongoose";
import bookingInterface from "./bookingInterface";

const bookingSchema = new Schema<bookingInterface>({
  facilityId: {
    type: Schema.Types.ObjectId,
    ref: "facility",
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});
const bookingModel = model<bookingInterface>("booking", bookingSchema);


export default bookingModel;