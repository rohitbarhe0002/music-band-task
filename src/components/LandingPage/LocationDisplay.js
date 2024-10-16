
import React, { useState, useEffect } from 'react';
import useLocation from '../../hooks/useLocation';
import useDebounce from '../../hooks/useDebounce';
import { fetchBandsByCity } from '../../api/musicBrainzApi'; 
import SearchBar from '../Search/SearchBar';
import BandsList from '../BandList/BandList';
import './LocationDisplay.css';

const LocationDisplay = () => {
  const [city, setCity] = useState('');
  const [bands, setBands] = useState([]);
  const location = useLocation();
  
  const debouncedCity = useDebounce(city, 500);

  useEffect(() => {
    if (debouncedCity) {
      handleSearch(debouncedCity);
    }
  }, [debouncedCity]);

  const handleSearch = async (searchCity) => {
    if (!searchCity && !location?.city) {
      alert('Please provide a city to search.');
      return;
    }

    try {
      const cityToSearch = searchCity || location?.city;
      const bandsData = await fetchBandsByCity(cityToSearch);
      setBands(bandsData);
    } catch (error) {
      console.error('Error fetching bands:', error);
      alert('Failed to fetch bands data.');
    }
  };

  return (
    <div className="location-container">
      <h2 className="location-title">Find Music Bands</h2>
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
      <BandsList bands={bands} />
    </div>
  );
};

export default LocationDisplay;
