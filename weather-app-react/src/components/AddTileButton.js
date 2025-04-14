import React from 'react';

function AddTileButton({ onClick }) {
  return (
    <div className="tile add-tile-button" onClick={onClick} role="button" tabIndex="0" aria-label="Add new tile">
      <span className="add-tile-icon">+</span>
    </div>
  );
}

export default AddTileButton;