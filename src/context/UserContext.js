import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simula la obtención de los datos del usuario
    const fetchUserData = async () => {
      const userData = await new Promise((resolve) =>
        setTimeout(() => resolve({
          id: '123',
          name: 'Brayan Gachuz',
          email: 'bgd010801@gmail.com',
          role: 'admin',
          //token: 'abc123',
        }), 1000)
      );
      setUser(userData);
    };

    fetchUserData();
  }, []);

  const logout = () => {
    setUser(null); // Limpiar la información del usuario
  };

  const changeRole = (role) => {
    setUser({ ...user, role });
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, changeRole }}>
      {children}
    </UserContext.Provider>
  );
};
