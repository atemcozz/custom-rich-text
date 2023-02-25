import React, { useEffect, useRef } from "react";
import { useState, useLayoutEffect } from "react";
import ContentEditable from "react-contenteditable";
const TextBlock = ({
  children,
  content,
  onChange,
  onDelete,
  onMoveUp,
  onMoveDown,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col w-10">
        <button className="bg-blue-300" onClick={onMoveUp}>
          ↑
        </button>
        <button className="bg-blue-300" onClick={onMoveDown}>
          ↓
        </button>
      </div>
      <ContentEditable
        html={content}
        className={"flex-1"}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onDelete} className={"bg-red-300 p-2"}>
        delete
      </button>
    </div>
  );
};

export default TextBlock;
