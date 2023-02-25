import React from "react";

const Editor = ({ editor, blockHandler, className }) => {
  if (!editor) {
    throw new Error("Editor instance must be provided to Editor component");
  }
  if (!blockHandler) {
    throw new Error("Handler function must be provided to Editor component");
  }
  return (
    <div className={className}>
      {editor?.getBlocks()?.map((block) => blockHandler(block, editor))}
    </div>
  );
};

export default Editor;
