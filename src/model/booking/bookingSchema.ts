import { Schema, model } from "mongoose";
import bookingInterface from "./bookingInterface";


const bookingSchema = new Schema<bookingInterface>({
  facilityId: {
    type: Schema.Types.ObjectId,
    ref: "facility",
    required: true,
  },
  date: {
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
  user:{
     type : Schema.Types.ObjectId,
     ref :'user',
     required:true
  },
  payableAmount:{
     type:Number,
     required:true
  },
 isBooked:{
     type :String,
     required:true
 }
});
const bookingModel = model<bookingInterface>("booking", bookingSchema);


export default bookingModel;