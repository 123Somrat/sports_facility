import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express-serve-static-core";

const asyncHandeler = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};


export default asyncHandeler;