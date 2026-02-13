export const APPLICATION_CONSTANTS = {
  DATABASE: {
    DEFAULT_CONNECTION_OPTIONS: {}
  },

  USER: {
    PASSWORD_SALT_ROUNDS: 10
  },

  AUTH: {
    COOKIE_NAME: "authenticationToken",
    COOKIE_MAX_AGE_MS: 7 * 24 * 60 * 60 * 1000,
    COOKIE_SAME_SITE: "strict" as const
  }
} as const;
