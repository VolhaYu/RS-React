import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store/hooksRedux';
import './searchBar.css';
import { addSearchValue } from '../../redux/store/reducers/reducers';
import { Props } from '../../types';
import { AppDispatch } from '../../redux/store/store';

function SearchBar({ newResult }: Props) {
  const searchVal = useAppSelector((state) => state.reducerForm.searcValue);
  const [searcValue, setSearcValue] = useState<string>(searchVal);
  const dispatch = useDispatch<AppDispatch>();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearcValue(event.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    newResult(searcValue);
    dispatch(addSearchValue(searcValue));
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
