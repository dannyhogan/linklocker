import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useAuth } from '../../context/auth'
import "./NavBar.scss";

const NavBar = () => {
  const [open, toggleOpen] = useState(false);
  const handleClick = () => toggleOpen((open) => !open);
  const { auth } = useAuth();

  return (
    <div className="NavBar">
      <button className="toggle-button" onClick={handleClick}>
        {open ? <IoMdClose /> : <AiOutlineMenu />}
      </button>
      <nav className={`side-menu ${open ? "open" : "closed"}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {
            auth.isAuthenticated ?
              <>
                <li>
                  <NavLink to={`/${auth.user.username}`}>My Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Edit Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/analytics">Analytics</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Log Out</NavLink>
                </li>
              </>
              :
              <>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </>
          }
        </ul>
      </nav >
    </div >
  );
};

export default NavBar;
