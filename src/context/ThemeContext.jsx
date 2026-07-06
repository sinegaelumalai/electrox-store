import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

 useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    const isDark = savedTheme === "dark";

    setDarkMode(isDark);

    document.documentElement.classList.toggle("dark", isDark);
  } else {
    // Default theme = Dark
    setDarkMode(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;