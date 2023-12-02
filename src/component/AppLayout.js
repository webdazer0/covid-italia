import React from "react";
import useDarkMode from "../hooks/useDarkMode";

function AppLayout({ children }) {
  const { mainClass } = useDarkMode();

  return <main className={mainClass}>{children}</main>;
}
export default AppLayout;
