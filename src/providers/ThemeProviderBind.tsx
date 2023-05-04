import {
  CssBaseline,
  Theme as ThemeProps,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { createContext, memo, useMemo, useState } from "react";

const ThemeContext = createContext<ThemeContextProps | any>({
  theme: "",
  toggleThemeMode: () => {},
  setTheme: () => {},
});
function ThemeProviderBind({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeColor>("dark");
  const toggleThemeMode = () => {};

  const themeRef = useMemo(() => {
    const isDark = theme === "dark";
    const themeConfig: ThemeProps = createTheme({
      palette: {
        mode: theme,
        background: {
          default: isDark ? "#2F3032" : "#fff",
        },
      },
    });
    return themeConfig;
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleThemeMode, setTheme }}>
      <ThemeProvider theme={themeRef}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default memo(ThemeProviderBind);
