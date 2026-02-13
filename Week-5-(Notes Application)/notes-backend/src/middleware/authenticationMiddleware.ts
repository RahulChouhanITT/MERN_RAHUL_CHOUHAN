import type { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel.js";
import type { AuthenticatedRequest } from "../utils/types/authenticationTypes.js";
import { APPLICATION_MESSAGES } from "../utils/labels/applicationMessage.js";
import { APPLICATION_CONSTANTS } from "../utils/constants/applcationConstants.js";

export const protectAuthenticatedUser = async (
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = request.cookies[APPLICATION_CONSTANTS.AUTH.COOKIE_NAME];

    if (!token) {
      response.status(401).json({
        success: false,
        message: APPLICATION_MESSAGES.AUTH.TOKEN_MISSING
      });
      return;
    }

    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    );

    const user = await UserModel.findById(decoded.userId).select("-passwordHash");

    if (!user) {
      response.status(401).json({
        success: false,
        message: APPLICATION_MESSAGES.AUTH.USER_NOT_FOUND
      });
      return;
    }

    request.authenticatedUser = user;

    next();
  } catch (error) {
    response.status(401).json({
      success: false,
      message: APPLICATION_MESSAGES.AUTH.TOKEN_INVALID_OR_EXPIRED
    });
  }
};
