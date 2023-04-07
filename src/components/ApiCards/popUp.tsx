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
            <p className="info-text">{popUpData.name}</p>
            <p className="info-text">{popUpData.species}</p>
            <p className="info-text">{popUpData.status}</p>
            <p className="info-text">{popUpData.gender}</p>
            {/* <ul className="episode">
          {episode.map((item, ind) => (
            <li key={ind}>{item}</li>
          ))}
        </ul> */}
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
