import React, { useRef } from "react";
import "./switch.css";

function Switch({ checked, setChecked, setDarkMode }) {
  const ref = useRef(null);

  const changeColor = () => {
    setDarkMode(ref.current.checked);
    setChecked(ref.current.checked);
    console.log(ref.current.checked);
  };

  return (
    <div className="col-md-12">
      <div className="dark-mode-content">
        <div className="dark-mode">
          <input
            ref={ref}
            checked={checked}
            onChange={changeColor}
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
