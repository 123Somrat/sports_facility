import express, { Application } from "express";
import cors from "cors";
const middleWare = (app: Application) => {
  app.use(cors());
  app.use(express.json());
};

export default middleWare;
