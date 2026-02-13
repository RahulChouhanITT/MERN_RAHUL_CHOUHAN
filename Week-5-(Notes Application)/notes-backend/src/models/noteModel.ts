import mongoose, { Schema } from "mongoose";
import type { INoteDocument } from "../utils/types/noteTypes.js";
import { DATABASE_LABELS } from "../utils/labels/databaseLabels.js";

const noteSchema = new Schema<INoteDocument>(
  {
    [DATABASE_LABELS.NOTE.FIELDS.USER_REFERENCE]: {
      type: Schema.Types.ObjectId,
      ref: DATABASE_LABELS.USER.COLLECTION_NAME,
      required: true,
      index: true
    },

    [DATABASE_LABELS.NOTE.FIELDS.TITLE]: {
      type: String,
      required: true,
      trim: true
    },

    [DATABASE_LABELS.NOTE.FIELDS.DESCRIPTION]: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

noteSchema.index({
  userReference: 1,
  createdAt: -1
});

export const NoteModel = mongoose.model<INoteDocument>(
  DATABASE_LABELS.NOTE.COLLECTION_NAME,
  noteSchema
);
