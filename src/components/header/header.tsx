import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './header.css';
import { PageState, Props } from '../../types';

class Header extends React.Component<Props, PageState> {
  render(): React.ReactNode {
    return (
      <header className="header">
        <h2 className="header__h2">
          <Routes>
            <Route path="/" element="Home" />
            <Route path="/about" element="About" />
            <Route path="/form" element="Form" />
            <Route path="*" element="Not Found" />
          </Routes>
        </h2>
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
}
export default Header;
