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
  errMessage: (value: React.SetStateAction<null>) => void;
};

function SearchBar({ newResult, errMessage }: Props) {
  const [searcValue, setSearcValue] = useState<string>(localStorage.getItem('inputValue') || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('inputValue', searcValue);
  }, [searcValue]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await fetch(`${baseUrl}?${filterParams.name}${searcValue}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Search by name only! Enter correct data!');
        }
        return res.json();
      })
      .then((data) => {
        newResult(data.results);
        errMessage(null);
      })
      .catch((err) => {
        errMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
