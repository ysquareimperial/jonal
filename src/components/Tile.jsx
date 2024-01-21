// Tile.js
import React from 'react';

const Tile = ({ data }) => {
  // Your tile component logic here
  return (
    <div className="tile">
      <span>{data.label}</span>
    </div>
  );
};

export default Tile;
