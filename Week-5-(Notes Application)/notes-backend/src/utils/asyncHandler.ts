import type { Request, Response, NextFunction } from "express";

export const asyncHandler =
  (controller: any) =>
  (request: Request, response: Response, next: NextFunction) =>
    Promise.resolve(controller(request, response, next)).catch(next);
