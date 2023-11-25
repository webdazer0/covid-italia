import { useState, useEffect } from "react";

const useDarkMode = () => {
  // DARK MODE INIZIO
  const [checked, setChecked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  useEffect(() => {
    setDarkMode(true);
    setChecked(true);
  }, []);
  // DARK MODE FINE
  return { checked, setChecked, setDarkMode, mainClass };
};

export default useDarkMode;
