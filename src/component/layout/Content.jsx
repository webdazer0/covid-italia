import React from "react";

const Content = ({ children, col }) => {
  const classColumn = `col-md-${col}`;
  return (
    <div className={classColumn}>
      <div className="row">{children}</div>
    </div>
  );
};

export default Content;
