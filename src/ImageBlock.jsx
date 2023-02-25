import React from "react";

const ImageBlock = ({
  children,
  content,
  onChange,
  onDelete,
  onMoveUp,
  onMoveDown,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col w-5">
        <button className="bg-blue-300" onClick={onMoveUp}>
          ↑
        </button>
        <button className="bg-blue-300" onClick={onMoveDown}>
          ↓
        </button>
      </div>
      <img src={content} alt="img" className="w-full block" />
      <button onClick={onDelete} className={"bg-red-300 p-2"}>
        delete
      </button>
    </div>
  );
};

export default ImageBlock;
