import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import MapBlock from "./MapBlock";
import useEditor from "./useEditor";
import Editor from "./Editor";
function App() {
  const editor = useEditor();

  function markCommand(command) {
    document.execCommand(command);
  }
  function handler(block, editor) {
    switch (block.type) {
      case "text":
        return (
          <TextBlock
            key={block.id}
            content={block.content}
            onChange={(data) => editor.setBlockContent(block, data)}
            onDelete={() => editor.removeBlock(block)}
          />
        );
      case "image":
        return (
          <ImageBlock
            key={block.id}
            content={block.content}
            onChange={(data) => editor.setBlockContent(block, data)}
            onDelete={() => editor.removeBlock(block)}
          />
        );
      case "geo":
        return (
          <MapBlock
            key={block.id}
            content={block.content}
            onChange={(data) => editor.setBlockContent(block, data)}
            onDelete={() => editor.removeBlock(block)}
          />
        );
      default:
        return null;
    }
  }
  return (
    <div className="App">
      <div className="max-w-full md:max-w-screen-lg mx-auto">
        <Editor editor={editor} handler={handler} />
        <div className="flex">
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              markCommand("bold");
            }}
            className="p-2 bg-green-300"
          >
            bold
          </button>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              markCommand("italic");
            }}
            className="p-2 bg-green-300"
          >
            italic
          </button>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              markCommand("underline");
            }}
            className="p-2 bg-green-300"
          >
            undeline
          </button>
        </div>
        <div className="flex">
          <button
            onClick={() => editor.insertBlock("text", "")}
            className="p-2 bg-blue-300"
          >
            text
          </button>
          <button
            onMouseDown={(event) => {
              event.preventDefault();
              const input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");
              input.click();
              input.onchange = () => {
                const file = input.files[0];
                const formData = new FormData();
                formData.append("image", file);
                const url = URL.createObjectURL(file);
                editor.insertBlock("image", url);
              };
            }}
            className="p-2 bg-blue-300"
          >
            image
          </button>
          <button
            onMouseDown={(event) => {
              event.preventDefault();
              const latlng = prompt('Enter coordinates with ", " ');
              editor.insertBlock("geo", {
                lat: latlng.split(",")[0],
                lng: latlng.split(",")[1],
              });
            }}
            className="p-2 bg-blue-300"
          >
            geo
          </button>
        </div>
      </div>
      <div>
        <div>{JSON.stringify(editor.getRegisteredBlocks())}</div>
        <pre>{JSON.stringify(editor.getBlocks(), null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
