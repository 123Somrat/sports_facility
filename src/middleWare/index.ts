import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "../router";
import HttpError from "../utils/httpError";
const middleWare = (app: Application) => {
  app.use(cors());
  app.use(express.json());
  app.use(router);

  app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.json({
      status: err.status || 500,
      code: err.code || "Internal server error",
      messege: err.message || "Opps someThing wrong in our side",
    });
  });
};

export default middleWare;
