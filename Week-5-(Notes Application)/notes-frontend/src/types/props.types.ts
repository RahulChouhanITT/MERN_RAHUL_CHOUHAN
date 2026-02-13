import type { Note } from "./notes.types";

export interface SidebarProps {
  notes: Note[];
  onAddClick: () => void;
  onNoteClick: (note: Note) => void;
}

export interface NotesGridProps {
  notes: Note[];
  onNoteClick: (note: Note) => void;
  onEditClick: (note: Note) => void;
  onDeleteClick: (id: string) => void;
}

export interface NoteEditorProps {
  note: Note | null;
  onSave: (note: Note) => void;
  onDelete: (id: string) => void;
}
