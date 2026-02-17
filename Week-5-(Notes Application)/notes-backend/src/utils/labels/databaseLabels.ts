export const DATABASE_LABELS = {
  USER: {
    COLLECTION_NAME: "users",
    FIELDS: {
      FULL_NAME: "fullName",
      EMAIL_ADDRESS: "emailAddress",
      PASSWORD_HASH: "passwordHash"
    }
  },

  NOTE: {
    COLLECTION_NAME: "notes",
    FIELDS: {
      USER_REFERENCE: "userReference",
      TITLE: "title",
      DESCRIPTION: "description"
    }
  }
} as const;
