import { NextFunction, Response } from "express";
import AuthenticatedRequest from "../types/type";
const isAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  let role = req.user.paylode.role;
  console.log(role)
  // if role user then throw a error
  if (role === !"user") {
    throw new Error("Permisson denied");
  }

  // if user is admin then call the next function
  if (role === "admin") {
    next();
  }
};

export default isAdmin;
