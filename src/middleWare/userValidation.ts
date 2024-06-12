import { NextFunction, Request, Response } from "express";
import userValidationSchema from "../model/user/userSchemaValidation";

const userValidation = (req: Request, res: Response, next: NextFunction) => {
  const isValidated = userValidationSchema.safeParse(req.body);

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

export default userValidation;
