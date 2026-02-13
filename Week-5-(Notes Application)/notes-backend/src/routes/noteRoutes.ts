import { Router } from "express";
import {
  createNoteController,
  getNotesController,
  updateNoteController,
  deleteNoteController
} from "../controllers/noteController.js";
import { protectAuthenticatedUser } from "../middleware/authenticationMiddleware.js";

const noteRouter = Router();

noteRouter.use(protectAuthenticatedUser);

noteRouter.post("/", createNoteController);
noteRouter.get("/", getNotesController);
noteRouter.put("/:noteId", updateNoteController);
noteRouter.delete("/:noteId", deleteNoteController);

export default noteRouter;
