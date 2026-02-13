import { Router } from "express";
import {
  registerUserController,
  loginUserController,
  logoutUserController,
  getCurrentUserController
} from "../controllers/authenticationController.js";
import {asyncHandler} from '../utils/asyncHandler.js'
import { protectAuthenticatedUser } from "../middleware/authenticationMiddleware.js";

const authenticationRouter = Router();
authenticationRouter.post(
  "/register",
  asyncHandler(registerUserController)
);

authenticationRouter.post(
  "/login",
  asyncHandler(loginUserController)
);

authenticationRouter.post(
  "/logout",
  asyncHandler(logoutUserController)
);

authenticationRouter.get(
  "/me",
  protectAuthenticatedUser,
  asyncHandler(getCurrentUserController)
);


export default authenticationRouter;
