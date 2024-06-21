import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "../router";
import HttpError from "../utils/httpError";
const middleWare = (app: Application) => {
  app.use(cors());
  app.use(express.json());
  app.use(router);
};

export default middleWare;
