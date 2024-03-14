import React from "react";
import useLocalStorage from "./useLocalStorage";
import './styles.css'

export const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");

  }

  return (
    <div className="theme-switch-container" data-theme={theme}>
      <div className="container">
        <h1>Hi there!!</h1>
        <p>Now it's in {theme} theme</p>
        <button onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
