import React from 'react';
import Loading from '../Loading/Loading';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../context/auth';

const PrivateRoute = ({ component: Component, ...props }) => {

  const { auth, isLoading } = useAuth();

  return (
    <Route
      {...props}
      render={componentProps => {
        if(!isLoading) {

          if(auth.isAuthenticated) {
            return <Component {...componentProps} />
          } else {
            return <Redirect to="/" />
          }

        }
        else {
          return <Loading />
        }
      }}
    />
  );
};

export default PrivateRoute;
