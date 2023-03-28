import React, { useEffect, useState } from 'react';
import './searchBar.css';

function SearchBar() {
  const [value, setValue] = useState(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', value);
  }, [value]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__input" type="text" value={value} onChange={handleChange} />
      <button className="form__button" type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchBar;
