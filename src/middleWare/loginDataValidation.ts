import { Request, Response, NextFunction } from "express";
import userLoginDataValidation from "../model/user/loginDataValidation";

const loginDataValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validatedLoginData = userLoginDataValidation.safeParse(req.body);

  if (!validatedLoginData.success) {
    const errors = validatedLoginData.error.errors.map((error) => {
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


export default loginDataValidation;