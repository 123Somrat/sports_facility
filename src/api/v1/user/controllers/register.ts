
import { Request , Response } from "express";
import userValidationSchema from "../../../../model/user/userSchemaValidation";

const register = async (req:Request,res:Response)=>{
    
    const validatedUserInfo = req.body;

   
   


   res.status(201).json({
       status:201,
       code : 'User Created Successfully',
       data : validatedUserInfo
   })
    





}

export default register;