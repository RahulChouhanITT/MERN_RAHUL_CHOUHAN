import jwt from "jsonwebtoken";

export const generateAuthenticationToken = (
  userIdentifier: string
): string => {
  return jwt.sign(
    { userId: userIdentifier },
    process.env.JWT_SECRET_KEY as string,
    { expiresIn: "7d" }
  );
};
