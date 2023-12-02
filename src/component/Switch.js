import React from "react";
import "./switch.css";
import useDarkMode from "../hooks/useDarkMode";

function Switch() {
  const { darkTheme, onChangeTheme } = useDarkMode();

  return (
    <div className="col-md-12">
      <div className="dark-mode-content">
        <div className="dark-mode">
          <input
            checked={darkTheme}
            onChange={onChangeTheme}
            type="checkbox"
            className="checkbox"
            id="checkbox"
          />
          <label className="switch" htmlFor="checkbox"></label>
          <p className="dark-mode-title text-center pt-1">Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default Switch;
