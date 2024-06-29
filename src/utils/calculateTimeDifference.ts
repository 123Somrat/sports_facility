import HttpError from "./httpError";


/**
 * 
 * @param startTime 
 * @param endTime 
 * if startTime less then 10 and endTime greter then 20 then throw a error service is not available time slots
 * if startTime equal or greter then endTime throw a error
 * @returns time differnce
 */
const calculateTimeDiffernce = (startTime: string, endTime: string):number => {

  // Convert it into number to calculate time differnce between startTime to endTime
  const sTime = Number(startTime.split(":").join("."));
  const eTime = Number(endTime.split(":").join("."));

// if booking stratTime less then 10 and endTime greter then 20 then throwing a error
 if(sTime<10 || eTime>20){
   throw new HttpError(503,'Service Unavailable','Requested time slot booking not possible')
 }

 // if Startme equal to end time and startTime greter then endTime then throw a error
  if (sTime >= eTime) {
    throw new HttpError(400, "Bad request", "Invalid time formet");
  }
// Calculated time differnce between start time and end time
  const timeDiffernce = sTime  - eTime

  // return the time differnce
return timeDiffernce
};

export default calculateTimeDiffernce;
