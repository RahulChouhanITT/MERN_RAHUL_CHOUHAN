import type { Request, Response } from "express";
import type { AuthenticatedRequest } from "../utils/types/authenticationTypes.js";
import {
  registerNewUser,
  authenticateUser
} from "../services/authenticationService.js";
import { ApplicationError } from "../utils/applicationError.js";
import { APPLICATION_MESSAGES } from "../utils/labels/applicationMessage.js";
import { APPLICATION_CONSTANTS } from "../utils/constants/applcationConstants.js";

export const registerUserController = async (
  request: Request,
  response: Response
): Promise<void> => {
  const { fullName, emailAddress, password } = request.body;

  if (!fullName || !emailAddress || !password) {
    throw new ApplicationError(APPLICATION_MESSAGES.AUTH.ALL_FIELDS_REQUIRED, 400);
  }

  const user = await registerNewUser({
    fullName,
    emailAddress,
    password
  });

  response.status(201).json({
    success: true,
    message: APPLICATION_MESSAGES.AUTH.REGISTER_SUCCESS,
    data: user
  });
};

export const loginUserController = async (
  request: Request,
  response: Response
): Promise<void> => {
  const { emailAddress, password } = request.body;

  if (!emailAddress || !password) {
    throw new ApplicationError(APPLICATION_MESSAGES.AUTH.EMAIL_PASSWORD_REQUIRED, 400);
  }

  const { user, token } = await authenticateUser({
    emailAddress,
    password
  });

  response.cookie(APPLICATION_CONSTANTS.AUTH.COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: APPLICATION_CONSTANTS.AUTH.COOKIE_SAME_SITE,
    maxAge: APPLICATION_CONSTANTS.AUTH.COOKIE_MAX_AGE_MS
  });

  response.status(200).json({
    success: true,
    message: APPLICATION_MESSAGES.AUTH.LOGIN_SUCCESS,
    data: user
  });
};

export const logoutUserController = async (
  request: Request,
  response: Response
): Promise<void> => {
  response.clearCookie(APPLICATION_CONSTANTS.AUTH.COOKIE_NAME, {
    httpOnly: true,
    sameSite: APPLICATION_CONSTANTS.AUTH.COOKIE_SAME_SITE
  });

  response.status(200).json({
    success: true,
    message: APPLICATION_MESSAGES.AUTH.LOGOUT_SUCCESS
  });
};

export const getCurrentUserController = async (
  request: AuthenticatedRequest,
  response: Response
): Promise<void> => {
  const authenticatedUser = request.authenticatedUser;

  response.status(200).json({
    success: true,
    message: APPLICATION_MESSAGES.AUTH.CURRENT_USER_SUCCESS,
    data: {
      id: authenticatedUser._id,
      fullName: authenticatedUser.fullName,
      emailAddress: authenticatedUser.emailAddress
    }
  });
};
