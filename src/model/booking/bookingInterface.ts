import { Schema } from "mongoose"

interface bookingInterface extends Document  {
     facilityId:typeof Schema.Types.ObjectId,
     data:string,
     startTime:string,
     endTime:string
};


export default bookingInterface;
