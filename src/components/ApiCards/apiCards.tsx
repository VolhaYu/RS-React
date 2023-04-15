import React, { useState } from 'react';
import { useAppSelector } from '../../redux/store/hooksRedux';
import SearchBar from '../SearchBar/SearchBar';
import './apiCards.css';
import { Result } from './api';
import PopUp from './popUp';
import { useGetAllCardsQuery } from '../../redux/servises/cardServise';

function ApiCards() {
  const searchVal = useAppSelector((state) => state.reducerForm.searcValue);

  const [searchValue, setSearcValue] = useState(searchVal);
  const [popUpValue, setPopUpValue] = useState<string>('');

  const { data: result, error, isLoading } = useGetAllCardsQuery(searchValue);

  const [isPopUp, setIsPopUp] = useState(false);

  const onClick = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsPopUp(true);
    setPopUpValue(e.currentTarget.id);
  };

  const closePopUp = () => {
    setIsPopUp(false);
  };

  const newResult = (data: string) => {
    setSearcValue(data);
  };

  return (
    <>
      <SearchBar newResult={newResult} />
      {isLoading && <h1 className="loading">Loading...</h1>}
      {error && <div className="error">Сould not fetch the data for that resours</div>}
      <div className="wrap-cards" data-testid="card-product-list">
        {result &&
          result.results.map((data: Result) => (
            <div className="card" key={data.id}>
              <h3 className="h3">{data.name} </h3>
              <img
                className="avatar"
                id={String(data.id)}
                src={data.image}
                alt="avatar"
                onClick={onClick}
              />
            </div>
          ))}
      </div>
      {isPopUp && popUpValue && <PopUp valueId={+popUpValue} closePopUp={closePopUp} />}
    </>
  );
}

export default ApiCards;
