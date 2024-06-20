import { NextFunction, Request, Response } from "express";
import userValidationSchema from "../model/user/userSchemaValidation";
import userLoginDataValidation from "../model/user/loginDataValidation";
import facilityVaidationSchema from "../model/facility/facilityValidationSchema";

const requestValidation = (req: Request, res: Response, next: NextFunction) => {

let isValidated;

  if(req.url==='/api/v1/auth/login'){
     isValidated = userLoginDataValidation.safeParse(req.body);
  }else if(req.url==='/api/v1/auth/registretion'){
    isValidated = userValidationSchema.safeParse(req.body);
  }else{
   isValidated = facilityVaidationSchema.safeParse(req.body)
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
