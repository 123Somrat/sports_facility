import { Request, Response, NextFunction } from "express";
import facilityVaidationSchema from "../model/facility/facilityValidationSchema";

const facilityValidationMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isValidated = facilityVaidationSchema.safeParse(req.body);

  if (!isValidated.success) {
    const errors = isValidated.error.errors.map((error) => {
      return {
        path: error.path[error.path.length - 1],
        message: error.message,
      };
    });

    return res.status(400).json({
      status: 400,
      code: "Invalid Credentials",
      errors: errors,
    });
  }

  next();
};

export default facilityValidationMiddleWare;