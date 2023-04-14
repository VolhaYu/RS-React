import React, { useEffect, useState } from 'react';
import './searchBar.css';
import { Props } from '../../types';

function SearchBar({ newResult }: Props) {
  const [searcValue, setSearcValue] = useState<string>('');
  // const [searcValue, setSearcValue] = useState<string>(localStorage.getItem('inputValue') || '');

  // useEffect(() => {
  //   localStorage.setItem('inputValue', searcValue);
  // }, [searcValue]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearcValue(event.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    newResult(searcValue);
    // console.log(searcValue);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__input" type="text" value={searcValue} onChange={handleChange} />
      <button className="form__button" type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchBar;
