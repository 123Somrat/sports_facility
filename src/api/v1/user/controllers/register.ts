
import { Request , Response } from "express";
import userValidationSchema from "../../../../model/user/userSchemaValidation";

const register = async (req:Request,res:Response)=>{
    
    const userData = userValidationSchema.safeParse(req.body)
    
   if(!userData.success){
      return res.status(400).json({
         status:400,
         code:"Bed Request",
         errors:userData.error.errors
       })
       
   }


   res.status(201).json({
       status:201,
       code : 'User Created Successfully',
       data : userData.data
   })
    





}

export default register;