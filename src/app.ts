import express, { Request, Response } from "express";
import cors from "cors";
import middleWare from "./middleWare";

// CReate  Express App
const app = express();
// Call MiddleWare function and pass the express app as a params
middleWare(app)

app.get("/api/v1/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    code: "OK",
    messege: "Application is running",
  });
});

export default app;
