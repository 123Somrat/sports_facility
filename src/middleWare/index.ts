import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "../router";
import rateLimiter from "./rateLimiter";

const middleWare = (app: Application) => {
  app.use(cors());
  app.use(express.json());
  app.use(rateLimiter);
  app.use(router);
  
};

export default middleWare;
