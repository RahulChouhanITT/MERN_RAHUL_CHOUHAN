import bcrypt from "bcryptjs";
import { APPLICATION_CONSTANTS } from "../constants/applcationConstants.js";

export const encryptPlainTextPassword = async (
  plainTextPassword: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(
    APPLICATION_CONSTANTS.USER.PASSWORD_SALT_ROUNDS
  );

  const hashedPassword = await bcrypt.hash(
    plainTextPassword,
    salt
  );

  return hashedPassword;
};
