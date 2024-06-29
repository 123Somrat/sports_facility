import HttpError from "./httpError";

const calculateTimeDiffernce = (startTime: string, endTime: string):number => {

  // Convert it into number to calculate time differnce between startTime to endTime
  const sTime = Number(startTime.split(":").join("."));
  const eTime = Number(endTime.split(":").join("."));


 

  if (sTime >= eTime) {
    throw new HttpError(400, "Bad request", "Invalid time formet");
  }

  const timeDiffernce = sTime  - eTime
return timeDiffernce
};

export default calculateTimeDiffernce;
