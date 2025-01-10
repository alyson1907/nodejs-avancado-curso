import { NextFunction, Request, Response } from "express";
import { BadRequestError, NotFoundError } from "./errors";

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (error instanceof BadRequestError) {
    res.status(400).send(error.message);
  } else if (error instanceof NotFoundError) {
    res.status(404).send(error.message);
  } else {
    res.status(500).send("Internal Server Error");
    console.error(error);
  }
  next();
};

export default errorHandler;
