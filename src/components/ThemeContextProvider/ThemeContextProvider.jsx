import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
