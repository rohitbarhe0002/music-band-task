import { useState, useEffect } from 'react';
import { getCityFromIP } from '../api/geoApi';

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const city = await getCityFromIP();
              setLocation({
                lat: latitude,
                lon: longitude,
                city,
              });
            } catch (error) {
              console.error('Error fetching city from IP:', error);
              setLocation({
                lat: latitude,
                lon: longitude,
                city: 'Unknown City',
              });
            }
          },
          async () => {
            console.log('User denied location permission, fetching city from IP...');
            fallbackToIPLocation();
          }
        );
      } else {
        console.log('Geolocation not available, fetching city from IP...');
        fallbackToIPLocation();
      }
    };

    const fallbackToIPLocation = async () => {
      try {
        const city = await getCityFromIP();
        setLocation({ city });
      } catch (error) {
        console.error('Error fetching location from IP:', error);
      }
    };
    
 

    fetchUserLocation();
  }, []);

  return location;
};

export default useLocation;
