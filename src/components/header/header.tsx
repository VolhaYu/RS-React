import React from "react";
import { NavLink } from "react-router-dom";
import './header.css';
import { PageState, Props } from "../../types";


class Header extends React.Component<Props, PageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      page: localStorage.getItem('page') || 'Home'
    };  
    this.changeValue = this.changeValue.bind(this);  
  }

  changeValue(e: React.MouseEvent) {
    let value: string = '';    
    if (e.currentTarget.textContent) {
      value = e.currentTarget.textContent;
    }
    this.setState(({page}) => ({
      page: value || this.state.page
    }));
    localStorage.setItem('page', value);
  }

  render(): React.ReactNode {
    return (
      <header className="header">
        <h2>{this.state.page}</h2>
        <nav className="wrap-links">
          <NavLink onClick={this.changeValue} className="link" to="/home">Home</NavLink>
          <NavLink onClick={this.changeValue} className="link" to="/about">About</NavLink>
        </nav>
      </header>
    ) ;   
  }
}
export default Header;
