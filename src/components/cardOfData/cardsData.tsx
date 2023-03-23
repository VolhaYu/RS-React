/* eslint-disable array-callback-return */
import React from 'react';
import { dataArray } from '../FormComponent/form';
import { DataArray } from '../../types';
import OneCard from './oneCard';
import './cardOfData.css';

class CardsData extends React.Component<DataArray> {
  render() {
    // const {nameFirst, nameLast, birthday, select, avatar, html, css, js, r } = this.props;
    console.log(dataArray);
    return (
      <>
        <h2>Cards:</h2>
        <div className="wrap-card">
          {dataArray.map((data, ind) => {
            return (
              <OneCard
                // eslint-disable-next-line react/no-array-index-key
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
