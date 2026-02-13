export const APPLICATION_MESSAGES = {
  DATABASE: {
    CONNECTION_SUCCESS:
      "Database connection established successfully.",
    CONNECTION_ERROR:
      "An error occurred while connecting to the database."
  },
  AUTH: {
    ALL_FIELDS_REQUIRED: "All fields are required.",
    EMAIL_PASSWORD_REQUIRED: "Email and password are required.",
    REGISTER_SUCCESS: "User registered successfully.",
    LOGIN_SUCCESS: "User logged in successfully.",
    LOGOUT_SUCCESS: "User logged out successfully.",
    CURRENT_USER_SUCCESS: "Current user fetched successfully.",
    USER_ALREADY_EXISTS: "User already exists with this email.",
    INVALID_CREDENTIALS: "Invalid email or password.",
    TOKEN_MISSING: "Not authorized. Authentication token missing.",
    USER_NOT_FOUND: "User not found.",
    TOKEN_INVALID_OR_EXPIRED: "Invalid or expired token."
  },
  NOTE: {
    TITLE_DESCRIPTION_REQUIRED: "Title and description are required.",
    DELETE_SUCCESS: "Note deleted successfully."
  },
  ERROR: {
    INTERNAL_SERVER_ERROR: "Internal Server Error"
  }
} as const;
