import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

interface AuthenticatedUser extends Request{
    user : JwtPayload
}





declare global {
  namespace Express {
      interface Request {
          user : JwtPayload;
      }
  }
}



export default AuthenticatedUser

