import bcrypt from "bcryptjs";
import { UserModel } from "../models/userModel.js";
import { generateAuthenticationToken } from "../utils/tokenUtility.js";
import { ApplicationError } from "../utils/applicationError.js";
import type {
  IRegisterUserInput,
  ILoginUserInput
} from "../utils/types/serviceInputTypes.js";
import { APPLICATION_MESSAGES } from "../utils/labels/applicationMessage.js";

export const registerNewUser = async (
  input: IRegisterUserInput
) => {
  const existingUser = await UserModel.findOne({
    emailAddress: input.emailAddress
  });

  if (existingUser) {
    throw new ApplicationError(APPLICATION_MESSAGES.AUTH.USER_ALREADY_EXISTS, 400);
  }

  const createdUser = await UserModel.create({
    fullName: input.fullName,
    emailAddress: input.emailAddress,
    passwordHash: input.password
  });

  return createdUser;
};

export const authenticateUser = async (
  input: ILoginUserInput
) => {
  const user = await UserModel.findOne({
    emailAddress: input.emailAddress
  });

  if (!user) {
    throw new ApplicationError(APPLICATION_MESSAGES.AUTH.INVALID_CREDENTIALS, 401);
  }

  const isPasswordValid = await bcrypt.compare(
    input.password,
    user.passwordHash
  );

  if (!isPasswordValid) {
    throw new ApplicationError(APPLICATION_MESSAGES.AUTH.INVALID_CREDENTIALS, 401);
  }

  const token = generateAuthenticationToken(user.id);

  return {
    user: {
      id: user._id,
      fullName: user.fullName,
      emailAddress: user.emailAddress
    },
    token
  };
};
