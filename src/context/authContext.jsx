import React, { createContext, useContext, useState, useEffect } from 'react';
import useAuthStore from '../stores/use-auth-store';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, observeAuthState, loginGoogleWithPopUp, logout, loading } = useAuthStore();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ authUser, loginGoogleWithPopUp, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);