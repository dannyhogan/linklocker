import React, { useEffect, useState, useContext } from 'react';
import { checkAuth } from '../services/auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [auth, updateAuth] = useState({
    isAuthenticated: false,
    user: null
  });

  const [authError, setAuthError] = useState(true);
  const [isLoading, updateLoading] = useState(true);

  const authenticate = async () => {
    updateLoading(true);
    const res = await checkAuth();

    if(res.user) {
      updateAuth(prevState => ({
        isAuthenticated: true,
        user: res.user
      }));
    }
  }

  useEffect(() => {

    authenticate()
      .then(() => {
        updateLoading(false);
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
