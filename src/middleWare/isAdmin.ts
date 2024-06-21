import { NextFunction, Request, Response } from "express";
import AuthenticatedUser from "../types/type";
import HttpError from "../utils/httpError";

const isAdmin = (
  req: AuthenticatedUser,
  res: Response,
  next: NextFunction
) => {

    // destructure the role
  let role = req.user.paylode.role;
  
  // if role user then throw a error
  if (role === !"user") {
    throw new HttpError(403,'Access denied','Access denied');
  }

  // if user is admin then call the next function
  if (role === "admin") {
    next();
  }
};

export default isAdmin;
