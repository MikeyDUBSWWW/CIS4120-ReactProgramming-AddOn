import React, { useState } from 'react';
import Location from './components/Location';
import Grid from './components/Grid';
import Modal from './components/Modal';
import { tileTypes } from './tileData'; // Import tileTypes here
import './App.css';

function App() {
  const [visibleTiles, setVisibleTiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLocation] = useState("Philadelphia, PA");

  const handleOpenModal = () => {
     const availableCount = tileTypes.filter(type => !visibleTiles.includes(type)).length;
     if (availableCount > 0) {
        setIsModalOpen(true);
     } else {
        console.log("No more tiles to add!");
     }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTile = (type) => {
    if (!visibleTiles.includes(type)) {
      setVisibleTiles(prevTiles => [...prevTiles, type]);
    }
    handleCloseModal();
  };

  const handleRemoveTile = (typeToRemove) => {
    setVisibleTiles(prevTiles => prevTiles.filter(type => type !== typeToRemove));
  };

  return (
    <div className="container">
      <Location city={currentLocation} />
      <Grid
        visibleTiles={visibleTiles}
        onRemoveTile={handleRemoveTile}
        onAddTileClick={handleOpenModal}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddTile={handleAddTile}
        visibleTiles={visibleTiles}
      />
    </div>
  );
}

export default App;