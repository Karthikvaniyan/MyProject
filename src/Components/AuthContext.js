// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component that wraps the entire app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to track logged-in user

  // Login function to set the user state
  const login = (username, password) => {
    setUser({ username, password }); // Store user data
    console.log('User logged in:', { username, password }); // Debugging log
  };

  // Logout function to reset the user state
  const logout = () => {
    console.log('Logging out user:', user); // Debugging log
    setUser(null); // Clear user state
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
