const API_URL = 'http://192.168.1.71:4000/api';

export const getNotes = async () => {
  try {
    const response = await fetch(`${API_URL}/notes`);
    const data = await response.json();

    if (!response.ok) {
      return [];
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

