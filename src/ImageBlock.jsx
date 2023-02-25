import React from "react";

const ImageBlock = ({ children, content, onChange, onDelete }) => {
  return (
    <div className="flex">
      <img src={content} alt="img" className="w-full block" />
      <button onClick={onDelete} className={"bg-red-300 p-2"}>
        delete
      </button>
    </div>
  );
};

export default ImageBlock;
