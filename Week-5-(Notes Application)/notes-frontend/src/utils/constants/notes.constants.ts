export const NOTES_TEXT = {
  TITLE_MAX_LENGTH: 80,
  TITLE_PLACEHOLDER: "Title",
  DESCRIPTION_PLACEHOLDER: "Take a note...",
  TITLE_REQUIRED: "Title is required",
  DESCRIPTION_REQUIRED: "Description is required",
  TITLE_MAX_ERROR: (limit: number) => `Title must be ${limit} characters or fewer`,
  LOADING: "Loading notes...",
  EMPTY: "No notes available",
  TOAST: {
    CREATE_SUCCESS: "New note added successfully",
    UPDATE_SUCCESS: "Note updated successfully",
    DELETE_SUCCESS: "Note deleted successfully",
    DELETE_CANCELLED: "Delete cancelled"
  },
  DELETE_MODAL: {
    TITLE: "Delete Note",
    MESSAGE_PREFIX: "Are you sure you want to delete",
    FALLBACK_NOTE: "this note",
    CANCEL: "Cancel",
    DELETE: "Delete"
  }
} as const;
