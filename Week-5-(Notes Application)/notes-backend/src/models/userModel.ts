import mongoose, { Schema } from "mongoose";
import type { IUserDocument } from "../utils/types/userTypes.js";
import { DATABASE_LABELS } from "../utils/labels/databaseLabels.js";
import { encryptPlainTextPassword } from "../utils/helperFunctions/passwordEncryptionUtility.js";

const userSchema = new Schema<IUserDocument>(
  {
    [DATABASE_LABELS.USER.FIELDS.FULL_NAME]: {
      type: String,
      required: true,
      trim: true
    },

    [DATABASE_LABELS.USER.FIELDS.EMAIL_ADDRESS]: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    [DATABASE_LABELS.USER.FIELDS.PASSWORD_HASH]: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

userSchema.pre<IUserDocument>("save", async function (next) {
  if (!this.isModified("passwordHash")) {
    return ;
  }

  this.passwordHash = await encryptPlainTextPassword(
    this.passwordHash
  );
});

export const UserModel = mongoose.model<IUserDocument>(
  DATABASE_LABELS.USER.COLLECTION_NAME,
  userSchema
);
