import { createContext } from "react";
import { Themes } from "./types";

export const ThemeContext = createContext<{
  theme: Themes;
  setTheme: (theme: Themes) => void;
  isDarkTheme: boolean;
}>({
  theme: "spec",
  setTheme: () => {},
  isDarkTheme: false,
});
