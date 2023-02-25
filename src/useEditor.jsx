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
    insertBlock(type, content) {
      const block = { id: nextID, type, content };
      setBlocks((s) => [...s, block]);
      setNextID((s) => s + 1);
    },
    removeBlock(block) {
      setBlocks((s) => s.filter((b) => b.id !== block.id));
    },
    registerBlock(name, action) {
      if (handlers.some((e) => e.name === name)) {
        setHandlers((s) =>
          s.map((h) => {
            if (h.name === name) {
              const handler = {
                name,
                action,
              };
              h = handler;
            }
            return h;
          })
        );
      } else {
        const handler = {
          name,
          action,
        };
        setHandlers((s) => [...s, handler]);
      }
    },
    getRegisteredBlocks() {
      return handlers;
    },
    applyCommand(command) {
      document.execCommand(command);
    },
  };
  return editor;
};

export default useEditor;
