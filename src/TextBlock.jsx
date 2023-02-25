import React, { useEffect, useRef } from "react";
import { useState, useLayoutEffect } from "react";
import ContentEditable from "react-contenteditable";
const TextBlock = ({ children, content, onChange, onDelete }) => {
  return (
    <div className="flex">
      <ContentEditable
        html={content}
        className={"flex-1"}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={() => onDelete()} className={"bg-red-300 p-2"}>
        delete
      </button>
    </div>
  );
};

export default TextBlock;
