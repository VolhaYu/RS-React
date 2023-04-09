import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './apiCards.css';
import { Result, baseUrl } from './api';
import PopUp from './popUp';

function ApiCards() {
  const [result, setResult] = useState<[Result]>(
    JSON.parse(`${localStorage.getItem('resultData')}`)
  );
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [isPopUp, setIsPopUp] = useState(false);
  const [popUpValue, setPopUpValue] = useState<string>();

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Сould not fetch the data for that resours');
        }
        return res.json();
      })
      .then((data) => {
        if (!result) {
          setResult(data.results);
          localStorage.setItem('resultData', JSON.stringify(data.results));
        }
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [result]);

  const onClick = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsPopUp(true);
    setPopUpValue(e.currentTarget.id);
  };

  const closePopUp = () => {
    setIsPopUp(false);
  };
  const newResult = (data: [Result]) => {
    setResult(data);
    localStorage.setItem('resultData', JSON.stringify(data));
  };

  const errMessage = (value: React.SetStateAction<null>) => {
    setError(value);
  };

  return (
    <>
      <SearchBar newResult={newResult} errMessage={errMessage} />
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="wrap-cards" data-testid="card-product-list">
        {result &&
          !error &&
          result.map((data: Result) => (
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
