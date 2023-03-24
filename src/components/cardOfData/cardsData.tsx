/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { dataArray } from '../FormComponent/form';
import { DataArray } from '../../types';
import OneCard from './oneCard';
import './cardOfData.css';

class CardsData extends React.Component<DataArray> {
  render() {
    console.log(dataArray);
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
                HTML={data.html}
                CSS={data.css}
                JS={data.js}
                REACT={data.react}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default CardsData;
