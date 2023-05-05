type ThemeColor = "dark" | "light";

interface ThemeContextProps {
  theme: ThemeColor;
  toggleThemeMode: () => void;
  setTheme: (theme?: ThemeColor) => void;
}
type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
};

export { SEOProps, ThemeContextProps, ThemeColor };
