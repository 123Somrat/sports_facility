import { Schema } from "mongoose"
import { ObjectId } from "mongodb"
interface bookingInterface extends Document  {
     facilityId: ObjectId,
     date:string,
     startTime:string,
     endTime:string,
     user: ObjectId,
     payableAmount:number,
     isBooked:string

};


export default bookingInterface;
