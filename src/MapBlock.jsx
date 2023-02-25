import React from "react";

const MapBlock = ({
  id,
  children,
  content,
  onChange,
  onDelete,
  onMoveUp,
  onMoveDown,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col w-5">
        <button className="bg-blue-300" onClick={onMoveUp}>
          ↑
        </button>
        <button className="bg-blue-300" onClick={onMoveDown}>
          ↓
        </button>
      </div>
      <div className="flex-1">
        <iframe
          width="425"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=20.500488281250004%2C55.372868141151756%2C35.00244140625001%2C60.60314950746827&amp;layer=mapnik"
        ></iframe>
        <br />
        <small>
          <a href={`https://www.openstreetmap.org/#map=7/${90}/${60}`}>
            View Larger Map
          </a>
        </small>
      </div>
      <button onClick={onDelete} className={"bg-red-300 p-2"}>
        delete
      </button>
    </div>
  );
};

export default MapBlock;
