import { API_URL } from '../../config';

export const getNotes = async () => {
  try {
    const response = await fetch(`${API_URL}/login`);
    const data = await response.json();

    if (!response.ok) {
      return [];
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}