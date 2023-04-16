/* eslint-disable react/no-array-index-key */
import React from 'react';

import { useAppSelector } from '../../../redux/store/hooksRedux';
import OneCard from './oneCard';
import './cardOfData.css';

function CardsData() {
  const dataArr = useAppSelector((state) => state.reducerForm.cards);

  return (
    <>
      <h2>Cards:</h2>
      <div className="wrap-card" data-testid="wrap-card">
        {dataArr &&
          dataArr.map((data, ind) => {
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
