import React from 'react';
import './BandItem.css';

const BandItem = ({ band }) => {
  return (
    <div className="band-item">
      <div className="band-info">
        <h3 className="band-name">{band.name}</h3>
        <p className="band-detail"><strong>Begin Date:</strong> {band['life-span']?.begin || 'Unknown'}</p>
        <p className="band-detail"><strong>Area:</strong> {band.area?.name || 'Unknown'}</p>
      </div>
    </div>
  );
};

export default BandItem;
