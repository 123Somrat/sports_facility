import { NextFunction, Request, Response } from "express";
import userValidationSchema from "../model/user/userSchemaValidation";
import userLoginDataValidation from "../model/user/loginDataValidation";
import facilityVaidationSchema from "../model/facility/facilityValidationSchema";
import updateFacilityValidationSchema from "../model/facility/updateFacilityValidationSchema";
import bookingValidationSchema from "../model/booking/bookingValidationSchema";

const requestValidation = (req: Request, res: Response, next: NextFunction) => {

let isValidated;

  if(req.url==='/api/v1/auth/login'){
     isValidated = userLoginDataValidation.safeParse(req.body);
  }else if(req.url==='/api/v1/auth/register'){
    isValidated = userValidationSchema.safeParse(req.body);
  }
  else if(req.url==='/api/v1/facilitys/667698018f9e980699f39bd9'){
        isValidated = updateFacilityValidationSchema.safeParse(req.body)
       
  }else if(req.url==='/api/v1/facilitys'){
   isValidated = facilityVaidationSchema.safeParse(req.body)
  }else{
      isValidated = bookingValidationSchema.safeParse(req.body)
  }
 
  if (!isValidated.success) {
    const errors = isValidated.error.errors.map((error) => {
      return {
        path: error.path[error.path.length - 1],
        message: error.message,
      };
    });
    return res.status(400).json({
        status:400,
        code : 'Bad Request',
        errors:errors
    })
  }

  next();
};

export default requestValidation;
