import { PropsWithChildren, useState } from "react";
import { ThemeContext } from "./themeContext";
import { Themes } from "./types";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Themes>("spec");

  const isDarkTheme = theme === "dark" || theme === "sharp";
  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
