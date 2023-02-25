import React from "react";

const MarkButton = () => {
  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        markCommand("bold");
      }}
      className="p-2 bg-green-300"
    >
      bold
    </button>
  );
};

export default MarkButton;
