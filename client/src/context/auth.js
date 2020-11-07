import React, { useEffect, useState, useContext } from 'react';
import { checkAuth } from '../services/auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [auth, updateAuth] = useState(null);
  const [authError, setAuthError] = useState(true);
  const [isLoading, updateLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      updateLoading(true);
      const res = await checkAuth();

      if(res.user) {
        updateAuth(res.user);
      }
    }
    
    authenticate()
      .then(() => {
        updateLoading(false)
      })

  }, []);

  const defaultValue = {
    auth,
    updateAuth,
    authError,
    setAuthError,
    isLoading
  }

  return (
    <AuthContext.Provider value={defaultValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { auth, isLoading, updateAuth, setAuthError, authError } = useContext(AuthContext);

  return { auth, isLoading, updateAuth, setAuthError, authError };
};