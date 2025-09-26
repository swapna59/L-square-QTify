import axios from "axios";
export const BACKENED_URL = "https://qtify-backend.labs.crio.do";

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKENED_URL}/albums/new`);
    return response.data;
  } catch (err) {
    console.error("Error fetching new albums", err);
  }
};

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKENED_URL}/albums/top`);
    return response.data;
  } catch (err) {
    console.error("Error fetching top albums", err);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKENED_URL}/songs`);
    return response.data;
  } catch (err) {
    console.error("Error fetching songs", err);
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BACKENED_URL}/genres`);
    return response.data;
  } catch (err) {
    console.error("Error fetching genres", err);
  }
};
