// components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ city, setCity, handleSearch }) => {
  return (
    <div className="location-details">
      <input
        type="text"
        value={city}
        placeholder="Enter a city"
        onChange={(e) => setCity(e.target.value)}
        className="city-input"
      />
      <button onClick={() => handleSearch(city)} className="search-button">
        Search Bands
      </button>
    </div>
  );
};

export default SearchBar;
