import { Header } from "../Header/Header";
import styles from "./styles.module.css";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContextProvider/ThemeContext";

export const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={styles.root}>
      <button
        onClick={() => setTheme(theme === "default" ? "dark" : "default")}
      >
        ChangeTheme
      </button>
      <Header />
      <div className={styles.content}>{children}</div>
      <footer>footer</footer>
    </div>
  );
};
