import "./App.css";
import { useEffect, useState } from "react";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import MapBlock from "./MapBlock";
import useEditor from "./useEditor";
import Editor from "./Editor";
import blockHandler from "./blockHandler";
import TextActions from "./TextActions";
import BlockActions from "./BlockActions";
function App() {
  const editor = useEditor();

  return (
    <div className="App">
      <div className="max-w-full md:max-w-screen-lg mx-auto">
        <Editor editor={editor} blockHandler={blockHandler} />
        <TextActions editor={editor} />
        <BlockActions editor={editor} />
      </div>
      <div>
        <pre>{JSON.stringify(editor.getBlocks(), null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
