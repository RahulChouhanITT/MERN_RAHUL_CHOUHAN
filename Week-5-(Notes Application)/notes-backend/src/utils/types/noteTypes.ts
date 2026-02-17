import { Document, Types } from "mongoose";

export interface INoteDocument extends Document {
  userReference: Types.ObjectId;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
