export const COOKIE_NAME = "app_theme";
export const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;
export const THEMES = ["dark", "light", "system"] as const;
export type Theme = (typeof THEMES)[number];
