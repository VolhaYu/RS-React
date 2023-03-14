import React from "react";
import { Link } from "react-router-dom";
import './header.css';
import { PageState, Props } from "../../types";


class Header extends React.Component<Props, PageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      page: localStorage.getItem('namePage') || 'Home'
    };
    this.changeAbout = this.changeAbout.bind(this);    
    this.changeHome = this.changeHome.bind(this);    
  }
  changeAbout() {
    this.setState(({page}) => ({
      page: 'About'
    }));
    localStorage.setItem('namePage', this.state.page);
  }
  changeHome() {
    this.setState(({page}) => ({
      page: 'Home'
    }));
    localStorage.setItem('namePage', this.state.page);
  }
  render(): React.ReactNode {
    return (
      <header className="header">
        <h2>{this.state.page}</h2>
        <div className="wrap-links">
          <Link onClick={this.changeHome} className="link" to="/">Home</Link>
          <Link onClick={this.changeAbout} className="link" to="/about">About</Link>
        </div>
      </header>
    ) ;   
  }
}
export default Header;
console.log(localStorage.getItem('namePage'))
