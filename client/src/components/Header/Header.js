import React from 'react';
import Logo from '../Logo/Logo';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import './Header.scss'

const Header = () => {
  return (
    <div className="Header">
      <Logo/>
      <HeaderProfile />
    </div>
  );
}

export default Header;
