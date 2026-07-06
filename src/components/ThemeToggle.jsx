import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="text-xl text-black dark:text-white hover:text-red-500 transition"
        >
            {darkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;