import type { Request, Response, NextFunction } from "express";
import { ApplicationError } from "../utils/applicationError.js";
import { APPLICATION_MESSAGES } from "../utils/labels/applicationMessage.js";

export const globalErrorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof ApplicationError) {
    return response.status(error.statusCode).json({
      success: false,
      message: error.message
    });
  }

  console.error("Unexpected Error:", error);

  return response.status(500).json({
    success: false,
    message: APPLICATION_MESSAGES.ERROR.INTERNAL_SERVER_ERROR
  });
};
