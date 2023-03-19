import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { PageState, Props } from '../../types';

class Header extends React.Component<Props, PageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      page: localStorage.getItem('page') || 'Home',
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e: React.MouseEvent) {
    const { page } = this.state;
    let value = '';
    if (e.currentTarget.textContent) {
      value = e.currentTarget.textContent;
    }
    this.setState(() => ({
      page: value || page,
    }));
    localStorage.setItem('page', value);
  }

  render(): React.ReactNode {
    const { page } = this.state;
    return (
      <header className="header">
        <h2>{page}</h2>
        <nav className="wrap-links">
          <NavLink onClick={this.changeValue} className="link" to="/">
            Home
          </NavLink>
          <NavLink onClick={this.changeValue} className="link" to="/about">
            About
          </NavLink>
        </nav>
      </header>
    );
  }
}
export default Header;
