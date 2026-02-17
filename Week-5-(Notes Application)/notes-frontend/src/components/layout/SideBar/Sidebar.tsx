import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { SIDEBAR_LABELS } from "../../../utils/labels/uiLabels";
import { SIDEBAR_DEFAULTS } from "../../../utils/constants/defaultValues";
import { NOTES_TEXT } from "../../../utils/constants/notes.constants";
import type { SidebarProps } from "../../../types/props.types";
import {
  SidebarContainer,
  AddNoteButton,
  SearchWrapper,
  SearchInput,
  SearchIconWrapper,
  NotesList,
  EmptySidebarState,
  NoteCard,
  NoteTitle
} from "./Sidebar.styles";

import type { Note } from "../../../types/notes.types";

const Sidebar = ({ notes, onAddClick, onNoteClick }: SidebarProps) => {
  const [activeNoteId, setActiveNoteId] = useState<string | null>(
    SIDEBAR_DEFAULTS.ACTIVE_NOTE_ID
  );
  const [searchTerm, setSearchTerm] = useState(SIDEBAR_DEFAULTS.SEARCH_TERM);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (note: Note) => {
    setActiveNoteId(note.id);
    onNoteClick(note);
  };

  return (
    <SidebarContainer>
      <AddNoteButton onClick={onAddClick}>{SIDEBAR_LABELS.ADD_NOTE_BUTTON}</AddNoteButton>

      <SearchWrapper>
        <SearchInput
          placeholder={SIDEBAR_LABELS.SEARCH_PLACEHOLDER}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIconWrapper>
          <MdSearch size={18} />
        </SearchIconWrapper>
      </SearchWrapper>

      <NotesList>
        {notes.length === 0 ? (
          <EmptySidebarState>{NOTES_TEXT.EMPTY}</EmptySidebarState>
        ) : (
          filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              $active={activeNoteId === note.id}
              onClick={() => handleClick(note)}
            >
              <NoteTitle>{note.title}</NoteTitle>
            </NoteCard>
          ))
        )}
      </NotesList>
    </SidebarContainer>
  );
};

export default Sidebar;
