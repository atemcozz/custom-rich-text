import React from "react";

const Editor = ({ editor, handler, className }) => {
  if (!editor) {
    throw new Error("Editor instance must be provided to Editor component");
  }
  if (!handler) {
    throw new Error("Handler function must be provided to Editor component");
  }
  return (
    <div className={className}>
      {editor?.getBlocks()?.map((block) => handler(block, editor))}
    </div>
  );
};

export default Editor;
