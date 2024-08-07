import React, { useMemo, useState } from "react";

const useEditor = () => {
  const [blocks, setBlocks] = useState([]);
  const [nextID, setNextID] = useState(0);
  const [handlers, setHandlers] = useState([]);
  const editor = {
    getBlocks() {
      return blocks;
    },
    setBlocks(newBlocks) {
      setBlocks(newBlocks);
    },
    getBlockContent(block) {
      let result;
      blocks.forEach((b) => {
        if (b.id === block.id) {
          result = b.content;
        }
      });
      return result;
    },
    setBlockContent(block, content) {
      setBlocks((s) =>
        s.map((b) => {
          if (b.id === block.id) {
            b.content = content;
          }
          return b;
        })
      );
    },
    insertBlock(type, content = "") {
      const block = { id: nextID, type, content };
      setBlocks((s) => [...s, block]);
      setNextID((s) => s + 1);
    },
    removeBlock(block) {
      setBlocks((s) => s.filter((b) => b.id !== block.id));
    },
    moveBlock(block, value) {
      let prevIndex = 0;
      let filtered = blocks.filter((b, index) => {
        if (b.id === block.id) {
          prevIndex = index;
          return false;
        }
        return true;
      });
      let nextIndex = prevIndex + value;

      filtered.splice(
        nextIndex >= 0 && nextIndex < blocks.length ? nextIndex : prevIndex,
        0,
        block
      );
      setBlocks(filtered);
    },

    format(style) {
      document.execCommand(style);
    },
  };
  return editor;
};

export default useEditor;
