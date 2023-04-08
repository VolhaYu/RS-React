import React, { useEffect, useState } from 'react';
import { Result } from './api';
import './popUp.css';

type Id = {
  valueId: number;
  closePopUp: () => void;
};

function PopUp({ valueId, closePopUp }: Id) {
  const [popUpData, setPopUpData] = useState<Result>();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${valueId}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resours');
        }
        return res.json();
      })
      .then((data) => {
        setPopUpData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [valueId]);
  console.log('popUpData', popUpData);

  return (
    <>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {popUpData && (
        <div className="pop-up" onClick={closePopUp}>
          <div className="pop-up__content">
            <div className="window-close" onClick={closePopUp}>
              <span className="close-line line1" />
              <span className="close-line line2" />
            </div>
            <img src={popUpData.image} alt="avatar" />
            <div className="wrap-info">
              <p className="info-text">Name: {popUpData.name}</p>
              <p className="info-text">Species: {popUpData.species}</p>
              <p className="info-text">Status: {popUpData.status}</p>
              <p className="info-text">Gender: {popUpData.gender}</p>
              <p className="info-text">Location: {popUpData.location?.name}</p>
              <p className="info-text">Episode: {popUpData.episode?.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
