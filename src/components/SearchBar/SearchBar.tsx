import React from "react";
import { Props, PageState } from "../../types";
import './searchBar.css';

class SearchBar extends React.Component<Props, {value: string}> {
  constructor (props: Props) {
    super(props);
    this.state = {
      value: localStorage.getItem("inputValue") || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }  

  // componentDidMount() {
  //   const inputValue = localStorage.getItem("inputValue") || '';
  //   this.setState({value: inputValue || ''});
  //   console.log('DidMount:', inputValue);
  // }

  componentWillUnmount(): void {
    localStorage.setItem("inputValue", this.state.value);
    console.log('WillUnmount:', this.state.value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({value: event.target.value});  
    // localStorage.setItem("inputValue", event.target.value);
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
        <input className="form__input" type="text" value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="form__button" type="submit">Search</button>
      </form>
    );
  }
}
export default SearchBar;