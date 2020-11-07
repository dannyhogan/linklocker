import React from 'react';
import './HeaderProfile.scss'
import { useAuth } from '../../context/auth';
import { logOutUser } from '../../services/auth'
// import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const HeaderProfile = () => {

  const { auth, updateAuth } = useAuth();

  const handleLogout = () => {
    logOutUser()
      .then(updateAuth(null));
  };

  return (
    auth ?
    <div className="HeaderProfile">
      <p>@{auth.username}</p>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
    :
    null
  );
}

export default HeaderProfile;
