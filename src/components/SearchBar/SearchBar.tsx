import React from "react";
import { Props } from "../../types";
import './searchBar.css';

class SearchBar extends React.Component {
  constructor (props: Props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.FocusEvent<HTMLInputElement>) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
    localStorage.setItem("inputValue", event.target.value);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submit');
  }

  render(): React.ReactNode {
    return (
      <form className="form"
        onSubmit={this.handleSubmit}
      >
        <input className="form__input" type="text" value={localStorage.getItem("inputValue") || ''}
          onChange={this.handleChange}
        />
        <button className="form__button" type="submit">Submit</button>
      </form>
    );
  }
}
export default SearchBar;