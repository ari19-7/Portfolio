"use client";
import { useEffect, useState } from "react";
import "./Switcher.css";
import PropTypes from "prop-types";

const Switcher = ({ darkClassName = "dark-mode" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the user's preferred color scheme on the client side
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  // Apply the selected theme (dark or light) when the component mounts or theme changes
  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the selected theme by adding/removing a class to the body element
  const applyTheme = () => {
    if (typeof document !== "undefined") {
      if (isDarkMode) {
        document.body.classList.add(darkClassName);
      } else {
        document.body.classList.remove(darkClassName);
      }
    }
  };

  return (
    <div className="light-dark-button">
      <button onClick={toggleTheme} className="btn" data-testid="themeSwitcherButton">
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

Switcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default Switcher;