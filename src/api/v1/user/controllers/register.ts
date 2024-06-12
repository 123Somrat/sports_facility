
import { Request , Response } from "express";
import userValidationSchema from "../../../../model/user/userSchemaValidation";
import { registerUser } from "../../../../lib/user";

const register = async (req:Request,res:Response)=>{
    
    // Validated user data
    const validatedUserInfo = req.body;

   
    // Call userRegistreyion service for create user
    const user = await registerUser(validatedUserInfo)
     


   res.status(201).json({
       status:201,
       code : 'User Created Successfully',
       data : user
   })
    





}

export default register;