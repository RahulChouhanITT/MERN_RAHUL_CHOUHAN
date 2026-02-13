import type { Response } from "express";
import {
  createNewNote,
  getAllNotesForUser,
  updateExistingNote,
  deleteExistingNote
} from "../services/noteService.js";
import type { AuthenticatedRequest } from "../utils/types/authenticationTypes.js";
import { ApplicationError } from "../utils/applicationError.js";
import type { NoteParams } from "../utils/types/controllerTypes.js";
import { APPLICATION_MESSAGES } from "../utils/labels/applicationMessage.js";

export const createNoteController = async (
  request: AuthenticatedRequest,
  response: Response
): Promise<void> => {
  const { title, description } = request.body;

  if (!title || !description) {
    throw new ApplicationError(APPLICATION_MESSAGES.NOTE.TITLE_DESCRIPTION_REQUIRED, 400);
  }

  const note = await createNewNote(
    request.authenticatedUser.id,
    title,
    description
  );

  response.status(201).json({
    success: true,
    data: note
  });
};

export const getNotesController = async (
  request: AuthenticatedRequest,
  response: Response
): Promise<void> => {
  const notes = await getAllNotesForUser(
    request.authenticatedUser.id
  );

  response.status(200).json({
    success: true,
    data: notes
  });
};

export const updateNoteController = async (
  request: AuthenticatedRequest & { params: NoteParams },
  response: Response
): Promise<void> => {
  const { noteId } = request.params;
  const { title, description } = request.body;

  if (!title || !description) {
    throw new ApplicationError(APPLICATION_MESSAGES.NOTE.TITLE_DESCRIPTION_REQUIRED, 400);
  }

  const updatedNote = await updateExistingNote(
    request.authenticatedUser.id,
    noteId,
    title,
    description
  );

  response.status(200).json({
    success: true,
    data: updatedNote
  });
};

export const deleteNoteController = async (
  request: AuthenticatedRequest & { params: NoteParams },
  response: Response
): Promise<void> => {
  const { noteId } = request.params;

  await deleteExistingNote(
    request.authenticatedUser.id,
    noteId
  );

  response.status(200).json({
    success: true,
    message: APPLICATION_MESSAGES.NOTE.DELETE_SUCCESS
  });
};
