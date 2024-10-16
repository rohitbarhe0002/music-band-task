// components/BandItem.js
import React from 'react';
import './BandItem.css';

const BandItem = ({ band }) => {
  return (
    <div className="band-item">
      <h3>{band.name}</h3>
      <p><strong>Begin Date:</strong> {band['life-span']?.begin || 'Unknown'}</p>
      <p><strong>Area:</strong> {band.area?.name || 'Unknown'}</p>
    </div>
  );
};

export default BandItem;
