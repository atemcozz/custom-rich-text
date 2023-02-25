import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import MapBlock from "./MapBlock";
function blockHandler(block, editor) {
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
export default blockHandler;
