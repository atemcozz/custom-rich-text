import React from "react";

const TextActions = ({ editor }) => {
  return (
    <div className="flex">
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          editor.format("bold");
        }}
        className="p-2 bg-green-300"
      >
        bold
      </button>
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          editor.format("italic");
        }}
        className="p-2 bg-green-300"
      >
        italic
      </button>
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          editor.format("underline");
        }}
        className="p-2 bg-green-300"
      >
        undeline
      </button>
    </div>
  );
};

export default TextActions;
