import { Request , Response , NextFunction } from "express"

const userAuthenticationMiddleWare = (req:Request,res:Response,next:NextFunction)=>{

    // Collect the authToken from request
   const authToken = req.headers.authorization?.split(' ')[1];
   
   //




};


export default userAuthenticationMiddleWare;