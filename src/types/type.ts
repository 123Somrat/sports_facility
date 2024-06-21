import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";


// Extends request object to add the user details
interface AuthenticatedRequest extends Request {
  user: JwtPayload;
}

export default AuthenticatedRequest






/*
declare global {
  namespace Express {
      interface Request {
          user : JwtPayload;
      }
  }
}

*/



