import express, { Application } from "express";
import cors from "cors";
import router from "../router";
const middleWare = (app: Application) => {
  
  app.use(cors());
  app.use(express.json());
  app.use(router);
};

export default middleWare;
