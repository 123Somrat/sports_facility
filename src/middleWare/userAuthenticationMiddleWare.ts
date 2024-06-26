import { Request, Response, NextFunction } from "express";
import { validateToken } from "../lib/token";
import { JwtPayload } from "jsonwebtoken";
import HttpError from "../utils/httpError";
import AuthenticatedUser from "../types/type";


const userAuthenticationMiddleWare = async (
  req: AuthenticatedUser,
  res: Response,
  next: NextFunction
) => {
  try {
    // Collect the authToken from request
    const authToken = req.headers.authorization?.split(" ")[1] as string;
   
    // Checking auth token has or not
    if (!authToken) {
      throw new HttpError(403, "Access denied", "Access denied");
    }

    //  call authToken validation service for validate the token
    const decodedData = (await validateToken(authToken)) as JwtPayload;
       
   
      if(!decodedData){
         throw new HttpError(403,'Access denied','Access denied')
      }

      
    if (decodedData) {
      req.user = decodedData as JwtPayload;
      next();
    }
  } catch (err) {
    next(err);
  }
};

export default userAuthenticationMiddleWare;
