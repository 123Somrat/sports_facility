import { Schema } from "mongoose"

interface bookingInterface extends Document  {
     facilityId:typeof Schema.Types.ObjectId,
     data:string,
     startTime:string,
     endTime:string,
     user: typeof Schema.Types.ObjectId,
     payableAmount:number,
     isBooked:string

};


export default bookingInterface;
