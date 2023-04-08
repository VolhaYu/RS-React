import React, { useEffect, useState } from 'react';
import './searchBar.css';
import { Result, baseUrl } from '../ApiCards/api';

const filterParams = {
  name: 'name=',
  status: 'sratus=',
  species: 'species=',
  type: 'type=',
  gender: 'gender=',
};

type Props = {
  newResult: (data: [Result]) => void;
};

function SearchBar({ newResult }: Props) {
  const [searcValue, setSearcValue] = useState<string>(localStorage.getItem('inputValue') || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('inputValue', searcValue);
  }, [searcValue]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}?${filterParams.name}${searcValue}`);
      const data = await response.json();

      newResult(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearcValue(event.target.value);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        value={searcValue}
        onChange={handleChange}
        disabled={isLoading}
      />
      <button className="form__button" type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  );
}
export default SearchBar;
