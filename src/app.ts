import express, { Request, Response , NextFunction} from "express";
import cors from "cors";
import middleWare from "./middleWare";
import HttpError from "./utils/httpError";

// Create  Express App
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

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  next()
  res.json({
    status: err.status || 500,
    code: err.code || "Internal server error",
    messege: err.message || "Opps someThing wrong in our side",
  });
});





export default app;
