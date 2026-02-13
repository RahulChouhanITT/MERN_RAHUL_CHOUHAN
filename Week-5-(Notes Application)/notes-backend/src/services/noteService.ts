import { NoteModel } from "../models/noteModel.js";
import { ApplicationError } from "../utils/applicationError.js";

export const createNewNote = async (
  userId: string,
  title: string,
  description: string
) => {
  return await NoteModel.create({
    userReference: userId,
    title,
    description
  });
};

export const getAllNotesForUser = async (userId: string) => {
  return await NoteModel.find({ userReference: userId }).sort({
    createdAt: -1
  });
};

export const updateExistingNote = async (
  userId: string,
  noteId: string,
  title: string,
  description: string
) => {
  const note = await NoteModel.findOne({
    _id: noteId,
    userReference: userId
  });

  if (!note) {
    throw new ApplicationError("Note not found or unauthorized.", 404);
  }

  note.title = title;
  note.description = description;

  return await note.save();
};

export const deleteExistingNote = async (
  userId: string,
  noteId: string
) => {
  const note = await NoteModel.findOneAndDelete({
    _id: noteId,
    userReference: userId
  });

  if (!note) {
    throw new ApplicationError("Note not found or unauthorized.", 404);
  }

  return note;
};
