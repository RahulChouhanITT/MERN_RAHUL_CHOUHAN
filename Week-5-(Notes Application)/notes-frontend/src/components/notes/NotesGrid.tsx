import { MdEdit, MdDelete } from "react-icons/md";
import {
  NotesGridContainer,
  NoteCard,
  CardHeader,
  CardTitle,
  IconGroup,
  CardDescription
} from "./NotesGrid.styles";

import type { NotesGridProps } from "../../types/props.types";

const NotesGrid = ({
  notes,
  onNoteClick,
  onEditClick,
  onDeleteClick
}: NotesGridProps) => {
  return (
    <NotesGridContainer>
      {notes.map((note) => (
        <NoteCard key={note.id} onClick={() => onNoteClick(note)}>
          <div>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>

              <IconGroup>
                <MdEdit
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditClick(note);
                  }}
                />
                <MdDelete
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteClick(note.id);
                  }}
                />
              </IconGroup>
            </CardHeader>

            <CardDescription>{note.description}</CardDescription>
          </div>
        </NoteCard>
      ))}
    </NotesGridContainer>
  );
};

export default NotesGrid;
