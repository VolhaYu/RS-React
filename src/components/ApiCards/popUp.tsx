import React from 'react';
import { Id } from 'types';
import { useGetPopUpQuery } from '../../redux/servises/cardServise';
import './popUp.css';

function PopUp({ valueId, closePopUp }: Id) {
  const { data: result, error, isLoading } = useGetPopUpQuery(String(valueId));

  return (
    <>
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">error!!</div>}
      {result && (
        <div className="pop-up" onClick={closePopUp}>
          <div className="pop-up__content">
            <div className="window-close" data-testid="window-close" onClick={closePopUp}>
              <span className="close-line line1" />
              <span className="close-line line2" />
            </div>
            <img src={result.image} alt="avatar" />
            <div className="wrap-info">
              <p className="info-text">Name: {result.name}</p>
              <p className="info-text">Species: {result.species}</p>
              <p className="info-text">Status: {result.status}</p>
              <p className="info-text">Gender: {result.gender}</p>
              <p className="info-text">Location: {result.location?.name}</p>
              <p className="info-text">Episode: {result.episode?.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
