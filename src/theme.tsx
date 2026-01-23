import { createContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const ThemeProviderContext = createContext<ThemeContextState | null>(null);

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("vite-ui-theme") as Theme) || systemTheme,
  );

  useEffect(() => {
    window.document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("vite-ui-theme", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme): void => {
      setTheme(theme);
    },
    toggleTheme: (): void => {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    },
  };

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
};
