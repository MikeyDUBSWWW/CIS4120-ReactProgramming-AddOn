import React from 'react';
import Tile from './Tile';
import AddTileButton from './AddTileButton';
import { tileData } from '../tileData';

function Grid({ visibleTiles, onRemoveTile, onAddTileClick }) {
  return (
    <div className="grid">
      {visibleTiles.map(type => (
        <Tile
          key={type}
          type={type}
          data={tileData[type]}
          onRemove={onRemoveTile}
        />
      ))}
      <AddTileButton onClick={onAddTileClick} />
    </div>
  );
}

export default Grid;