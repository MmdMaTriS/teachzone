import {
  CssBaseline,
  Theme as ThemeProps,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { ThemeColor, ThemeContextProps } from "./providers";
import { Vazirmatn } from "next/font/google";

const inter = Vazirmatn({
  subsets: ["latin"],
  weight: ["500", "400", "300", "600", "700", "800", "900"],
});

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  toggleThemeMode: (): void => {},
  setTheme: (): void => {},
});

function ThemeProviderBind({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeColor>("dark");
  const toggleThemeMode = (): void => {};
  const setThemeApp = (theme?: ThemeColor): void => {
    if (theme) {
      setTheme(theme);
    }
  };

  const themeRef = useMemo(() => {
    const isDark = theme === "dark";
    const themeConfig: ThemeProps = createTheme({
      palette: {
        mode: theme,
        background: {
          default: isDark ? "#2F3032" : "#fff",
        },
        secondary: {
          main: "#fff",
        },
      },
      typography: {
        fontFamily: inter.style.fontFamily,
      },
    });
    return themeConfig;
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleThemeMode, setTheme: setThemeApp }}
    >
      <ThemeProvider theme={themeRef}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default ThemeProviderBind;
