import { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Headers";
import NotesGrid from "../../notes/NotesGrid";
import NoteEditor from "../../notes/NoteEditor";
import { useNotes } from "../../../utils/hooks/useNotes"
import { useToast } from "../../../utils/hooks/useToast";
import { NOTES_TEXT } from "../../../utils/constants/notes.constants";
import type { Note } from "../../../types/notes.types";
import {
  LayoutContainer,
  BodyWrapper,
  SidebarWrapper,
  ContentWrapper,
  LoadingState,
  LoadingSpinner,
  EmptyContentState,
  ModalOverlay,
  ConfirmModal,
  ConfirmTitle,
  ConfirmText,
  ConfirmActions,
  ConfirmButton
} from "./DashboardLayout.styles";

const DashboardLayout = () => {
  const { notes, loading, createNote, updateNote, deleteNote } = useNotes();
  const { showToast } = useToast();

  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [noteIdToDelete, setNoteIdToDelete] = useState<string | null>(null);

  const handleAddClick = () => {
    setSelectedNote(null);
    setIsEditorOpen(true);
  };

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setIsEditorOpen(true);
  };

  const handleGridDelete = (id: string) => {
    setNoteIdToDelete(id);
  };

  const handleSave = async (noteData: Note) => {
  const isBothEmpty =
    !noteData.title.trim() && !noteData.description.trim();

  if (isBothEmpty) {

    setIsEditorOpen(false);
    return;
  }

  if (selectedNote) {
    await updateNote(noteData.id, {
      title: noteData.title,
      description: noteData.description,
    });
    showToast(NOTES_TEXT.TOAST.UPDATE_SUCCESS, "success");
  } else {
    await createNote({
      title: noteData.title,
      description: noteData.description,
    });
    showToast(NOTES_TEXT.TOAST.CREATE_SUCCESS, "success");
  }

  setIsEditorOpen(false);
};


  const handleDelete = (id: string) => {
    setNoteIdToDelete(id);
  };

  const handleCancelDelete = () => {
    setNoteIdToDelete(null);
    showToast(NOTES_TEXT.TOAST.DELETE_CANCELLED, "info");
  };

  const handleConfirmDelete = async () => {
    if (!noteIdToDelete) return;

    await deleteNote(noteIdToDelete);

    if (selectedNote?.id === noteIdToDelete) {
      setSelectedNote(null);
      setIsEditorOpen(false);
    }

    setNoteIdToDelete(null);
    showToast(NOTES_TEXT.TOAST.DELETE_SUCCESS, "success");
  };

  const noteToDelete = notes.find((note) => note.id === noteIdToDelete);

  return (
    <LayoutContainer>
      <Header />

      <BodyWrapper>
        <SidebarWrapper>
          <Sidebar
            notes={notes}
            onAddClick={handleAddClick}
            onNoteClick={handleNoteClick}
          />
        </SidebarWrapper>

        <ContentWrapper>
          {loading ? (
            <LoadingState>
              <LoadingSpinner />
              {NOTES_TEXT.LOADING}
            </LoadingState>
          ) : notes.length === 0 ? (
            <EmptyContentState>{NOTES_TEXT.EMPTY}</EmptyContentState>
          ) : (
            <NotesGrid
              notes={notes}
              onNoteClick={handleNoteClick}
              onEditClick={handleNoteClick}
              onDeleteClick={handleGridDelete}
            />
          )}

          {isEditorOpen && (
            <ModalOverlay>
              <NoteEditor
                key={selectedNote?.id || "new"}
                note={selectedNote}
                onSave={handleSave}
                onDelete={handleDelete}
              />
            </ModalOverlay>
          )}

          {noteIdToDelete && (
            <ModalOverlay>
              <ConfirmModal>
                <ConfirmTitle>{NOTES_TEXT.DELETE_MODAL.TITLE}</ConfirmTitle>
                <ConfirmText>
                  {NOTES_TEXT.DELETE_MODAL.MESSAGE_PREFIX}
                  {` "${noteToDelete?.title || NOTES_TEXT.DELETE_MODAL.FALLBACK_NOTE}"`}?
                </ConfirmText>
                <ConfirmActions>
                  <ConfirmButton onClick={handleCancelDelete}>
                    {NOTES_TEXT.DELETE_MODAL.CANCEL}
                  </ConfirmButton>
                  <ConfirmButton $variant="danger" onClick={handleConfirmDelete}>
                    {NOTES_TEXT.DELETE_MODAL.DELETE}
                  </ConfirmButton>
                </ConfirmActions>
              </ConfirmModal>
            </ModalOverlay>
          )}
        </ContentWrapper>
      </BodyWrapper>
    </LayoutContainer>
  );
};

export default DashboardLayout;
