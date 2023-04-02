import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
  const location = useLocation();

  function showLocation() {
    let pageName = 'Not Found';
    if (location.pathname.split('/')[1] === '') {
      pageName = 'Home';
    }
    if (location.pathname.split('/')[1] === 'form') {
      pageName = 'Form';
    }
    if (location.pathname.split('/')[1] === 'about') {
      pageName = 'About';
    }
    return pageName;
  }
  return (
    <header className="header">
      <h2 className="header__h2">{showLocation()}</h2>
      <nav className="wrap-links">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <NavLink className="link" to="/form">
          Form
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
