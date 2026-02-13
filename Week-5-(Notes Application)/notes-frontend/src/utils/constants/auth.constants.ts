export const AUTH_TEXT = {
  LOGO: "IIT Notes",
  LOGIN: {
    EMAIL_REQUIRED: "Email is required",
    PASSWORD_REQUIRED: "Password is required",
    INVALID_CREDENTIALS: "Invalid credentials",
    BUTTON: "Login",
    EMAIL_PLACEHOLDER: "Email",
    PASSWORD_PLACEHOLDER: "Password",
    REGISTER_PROMPT: "Don't have an account?",
    REGISTER_LINK: "Register"
  },
  REGISTER: {
    FULL_NAME_REQUIRED: "Full name is required",
    EMAIL_REQUIRED: "Email is required",
    EMAIL_INVALID: "Please enter a valid email address",
    PASSWORD_REQUIRED: "Password is required",
    PASSWORD_MIN_LENGTH: "Password must be at least 6 characters",
    BUTTON: "Register",
    FULL_NAME_PLACEHOLDER: "Full Name",
    EMAIL_PLACEHOLDER: "Email",
    PASSWORD_PLACEHOLDER: "Password",
    LOGIN_PROMPT: "Already have an account?",
    LOGIN_LINK: "Login",
    REGISTER_SUCCESS: "User registered successfully",
    REGISTER_FAILED: "Registration failed"
  },
  TOAST: {
    LOGIN_SUCCESS: "Login successful",
    LOGOUT_SUCCESS: "Logout successful"
  }
} as const;
