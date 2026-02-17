import { useState, useRef, useEffect, useCallback } from "react";
import { MdDelete} from "react-icons/md";
import type { NoteEditorProps } from "../../types/props.types";
import {
  EditorContainer,
  TitleInput,
  DescriptionInput,
  ErrorText,
  IconRow
} from "./NoteEditor.styles";
import { NOTES_TEXT } from "../../utils/constants/notes.constants";

const NoteEditor = ({ note, onSave, onDelete}: NoteEditorProps) => {
  const [title, setTitle] = useState(note?.title || "");
  const [description, setDescription] = useState(note?.description || "");

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

const handleSave = useCallback(() => {
  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();

  const isBothEmpty = !trimmedTitle && !trimmedDescription;

  if (isBothEmpty) {
    onSave({
      id: note?.id ?? "",
      title: "",
      description: "",
    });
    return;
  }

  let isValid = true;

  if (!trimmedTitle) {
    setTitleError(NOTES_TEXT.TITLE_REQUIRED);
    isValid = false;
  } else if (trimmedTitle.length > NOTES_TEXT.TITLE_MAX_LENGTH) {
    setTitleError(NOTES_TEXT.TITLE_MAX_ERROR(NOTES_TEXT.TITLE_MAX_LENGTH));
    isValid = false;
  } else {
    setTitleError("");
  }

  if (!trimmedDescription) {
    setDescriptionError(NOTES_TEXT.DESCRIPTION_REQUIRED);
    isValid = false;
  } else {
    setDescriptionError("");
  }

  if (!isValid) return;

  onSave({
    id: note?.id ?? "",
    title: trimmedTitle,
    description: trimmedDescription,
  });
}, [title, description, note, onSave]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleSave();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleSave]);

  return (
    <EditorContainer ref={containerRef}>
      <TitleInput
        placeholder={NOTES_TEXT.TITLE_PLACEHOLDER}
        value={title}
        maxLength={NOTES_TEXT.TITLE_MAX_LENGTH}
        hasError={!!titleError}
        onChange={(e) => {
          setTitle(e.target.value);
          setTitleError("");
        }}
      />
      <ErrorText $visible={!!titleError}>{titleError || " "}</ErrorText>

      <DescriptionInput
        placeholder={NOTES_TEXT.DESCRIPTION_PLACEHOLDER}
        value={description}
        hasError={!!descriptionError}
        onChange={(e) => {
          setDescription(e.target.value);
          setDescriptionError("");
        }}
      />
      <ErrorText $visible={!!descriptionError}>
        {descriptionError || " "}
      </ErrorText>

      <IconRow>
        {note && <MdDelete onClick={() => onDelete(note.id)} />}
      </IconRow>
    </EditorContainer>
  );
};

export default NoteEditor;
