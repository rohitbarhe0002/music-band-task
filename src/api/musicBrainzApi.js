import { MUSICBRAINZ_BASE_URL } from "../utills/constants";

export const fetchBandsByCity = async (city) => {
  const url = `${MUSICBRAINZ_BASE_URL}/artist/?query=area:${city} AND begin:[${new Date().getFullYear() - 10} TO *]&fmt=json&limit=50`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch bands');
    const data = await response.json();
    return data.artists || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
