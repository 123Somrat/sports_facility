import express, { Application , Request , Response , NextFunction } from "express";
import cors from "cors";
import router from "../router";
const middleWare = (app: Application) => {
  
  app.use(cors());
  app.use(express.json());
  app.use(router);


  app.use((err,req:Request,res:Response,next:NextFunction)=>{
         res.json({
             status:err.status || 500,
             code : err.code || 'Internal server error',
             messege : err.message || 'Opps someThing wrong in our side'
         })
  })



};

export default middleWare;
