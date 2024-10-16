import React from 'react';
import BandItem from "../BandItem/BandItem";
import './BandsList.css';

const BandsList = ({ bands }) => {
  return (
    <div className="bands-list">
      {bands.length > 0 ? (
        bands.map((band) => (
          <BandItem key={band.id} band={band} />
        ))
      ) : (
        <p className="no-bands">No bands found for the selected location.</p>
      )}
    </div>
  );
};

export default BandsList;
