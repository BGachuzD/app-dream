import * as SecureStore from 'expo-secure-store';

import { API_URL } from '../../config';

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const { token, user } = response.data;

    await SecureStore.setItemAsync('userToken', token);
    await SecureStore.setItemAsync('user', JSON.stringify(user));

    return user;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

export const logout = async () => {
  await SecureStore.deleteItemAsync('userToken');
  await SecureStore.deleteItemAsync('user');
};

export const getToken = async () => {
  return await SecureStore.getItemAsync('userToken');
};

export const getUser = async () => {
  const user = await SecureStore.getItemAsync('user');
  return user ? JSON.parse(user) : null;
};
