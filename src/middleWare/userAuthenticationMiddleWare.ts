import { Request , Response , NextFunction } from "express"
import { validateToken } from "../lib/token";

const userAuthenticationMiddleWare =async (req:Request,res:Response,next:NextFunction)=>{

    // Collect the authToken from request
   const authToken = req.headers.authorization?.split(' ')[1] as string;
   
   //
    const decodedData = await validateToken(authToken)



};


export default userAuthenticationMiddleWare;