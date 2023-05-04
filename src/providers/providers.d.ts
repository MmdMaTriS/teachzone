type ThemeColor = "dark" | "light";

interface ThemeContextProps {
  theme: ThemeColor;
  toggleThemeMode: () => void;
  setTheme: (theme: ThemeColor) => {};
}
