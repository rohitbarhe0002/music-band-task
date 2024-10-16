import axios from 'axios';
import { GEO_LOCATION_BASE_URL } from '../utills/constants';

export const getCityFromIP = async () => {
  const response = await axios.get(GEO_LOCATION_BASE_URL);
  return response.data.city || 'Unknown City';
};