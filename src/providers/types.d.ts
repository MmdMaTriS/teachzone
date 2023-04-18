export type ThemeMode = "dark" | "light";
export type ThemeDir = "rtl" | "ltr";
export type ThemeContextTypes = {
  setTheme?: (mode: ThemeMode) => void;
  toggleTheme?: () => void;
  setDir?: (direction: ThemeDir) => void;
};
