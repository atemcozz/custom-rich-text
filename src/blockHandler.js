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
          onMoveUp={() => editor.moveBlock(block, -1)}
          onMoveDown={() => editor.moveBlock(block, 1)}
        />
      );
    case "image":
      return (
        <ImageBlock
          key={block.id}
          content={block.content}
          onChange={(data) => editor.setBlockContent(block, data)}
          onDelete={() => editor.removeBlock(block)}
          onMoveUp={() => editor.moveBlock(block, -1)}
          onMoveDown={() => editor.moveBlock(block, 1)}
        />
      );
    case "geo":
      return (
        <MapBlock
          key={block.id}
          content={block.content}
          onChange={(data) => editor.setBlockContent(block, data)}
          onDelete={() => editor.removeBlock(block)}
          onMoveUp={() => editor.moveBlock(block, -1)}
          onMoveDown={() => editor.moveBlock(block, 1)}
        />
      );
    default:
      return null;
  }
}
export default blockHandler;
