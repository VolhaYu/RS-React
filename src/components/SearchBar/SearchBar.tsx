/* eslint-disable class-methods-use-this */
import React from 'react';
import { Props } from '../../types';
import './searchBar.css';

class SearchBar extends React.Component<Props, { value: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: localStorage.getItem('inputValue') || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentWillUnmount(): void {
    const { value } = this.state;
    localStorage.setItem('inputValue', value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  render(): React.ReactNode {
    const { value } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="form__input" type="text" value={value} onChange={this.handleChange} />
        <button className="form__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
export default SearchBar;
