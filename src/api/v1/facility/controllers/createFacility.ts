import {  Response } from "express";

import AuthenticatedRequest from "../../../../types/type";


const createFacility = (req:AuthenticatedRequest,res:Response)=>{

   console.log(req.user)





}

export default createFacility;