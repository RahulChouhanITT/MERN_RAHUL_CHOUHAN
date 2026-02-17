import { Document, Types } from "mongoose";

export interface IUserDocument extends Document {
  fullName: string;
  emailAddress: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}
