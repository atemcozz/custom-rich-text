import React from "react";

const BlockActions = ({ editor }) => {
  function handleImage(event) {
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
  }
  function handleGeo(event) {
    event.preventDefault();
    const latlng = prompt('Enter coordinates with ", " ');
    editor.insertBlock("geo", {
      lat: latlng.split(",")[0],
      lng: latlng.split(",")[1],
    });
  }
  return (
    <div className="flex">
      <button
        onClick={() => editor.insertBlock("text")}
        className="p-2 bg-blue-300"
      >
        text
      </button>
      <button onMouseDown={handleImage} className="p-2 bg-blue-300">
        image
      </button>
      <button onMouseDown={handleGeo} className="p-2 bg-blue-300">
        geo
      </button>
    </div>
  );
};

export default BlockActions;
