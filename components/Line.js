import React from "react";

const Line = ({ className }) => {
  return (
    <div
      className={`bg-gradient-to-r from-buttonColor to-slate-900 w-60 h-1.5 ${className}`}
    ></div>
  );
};

export default Line;
