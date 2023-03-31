/* eslint-disable react/no-array-index-key */
import React from 'react';
import { DataArray } from '../../../types';
import OneCard from './oneCard';
import './cardOfData.css';

export const dataArray: DataArray[] = [];

function CardsData() {
  return (
    <>
      <h2>Cards:</h2>
      <div className="wrap-card">
        {dataArray.map((data, ind) => {
          return (
            <OneCard
              key={ind}
              name={data.nameFirst}
              surName={data.nameLast}
              birthday={data.birthday}
              city={data.select}
              file={data.avatar}
              scills={data.scills}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardsData;
