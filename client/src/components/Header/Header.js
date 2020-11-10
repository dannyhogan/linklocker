import React from 'react';
import Logo from '../Logo/Logo';
import { useLocation, useParams } from 'react-router-dom';
import './Header.scss'

const Header = () => {
  const params = useParams();
  const location = useLocation();

  return (
    <div className="Header">
      <Logo />
    </div>
  );
}

export default Header;
