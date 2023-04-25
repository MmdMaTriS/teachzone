"use client";

import React, { createContext, useCallback, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeContextTypes, ThemeDir, ThemeMode } from "./types";
import {  Vazirmatn } from "next/font/google";

export const ThemeContext = createContext<ThemeContextTypes | null>({});

//# Declare Fonts
const VazirMatn = Vazirmatn({
  weight: ["400", "100", "300", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-vazir",
});


export default function Provider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [dir, setDir] = useState<ThemeDir>("rtl");
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);
  const themeConfig = useMemo(() => {
    const isDark = theme === "dark";
    return createTheme({
      direction: dir,
      typography: {
        fontFamily: VazirMatn.style.fontFamily,
      },
      palette: {
        mode: theme,
        primary: {
          main: isDark ? "#fff" : "#000",
        },
        error: {
          main: "#FF6969",
        },
        background: {
          default: isDark ? "#2B2B2B" : "#F0F0F0",
          paper: isDark ? "#2B2B2B" : "#F0F0F0",
        },
      },
    });
  }, [theme, dir]);

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        toggleTheme,
        setDir,
      }}
    >
      <ThemeProvider theme={themeConfig}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
