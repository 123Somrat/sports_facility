import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
declare global {
  namespace Express {
      interface Request {
          user : JwtPayload;
      }
  }
}

interface AuthenticatedRequest extends Request {
  user: JwtPayload;
}

export default AuthenticatedRequest

