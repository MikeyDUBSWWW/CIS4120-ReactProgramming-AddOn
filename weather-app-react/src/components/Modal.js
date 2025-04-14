import React from 'react';
import { tileData, tileTypes } from '../tileData';

function Modal({ isOpen, onClose, onAddTile, visibleTiles }) {
  if (!isOpen) {
    return null;
  }

  const availableTiles = tileTypes.filter(type => !visibleTiles.includes(type));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>What's most important to you?</h2>
        {availableTiles.map(type => (
          <button
            key={type}
            className="tile-option"
            onClick={() => onAddTile(type)}
          >
            {tileData[type].name}
          </button>
        ))}
        {availableTiles.length === 0 && <p style={{textAlign: 'center', color: '#666'}}>All tiles added!</p>}
        <button className="tile-option cancel-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;