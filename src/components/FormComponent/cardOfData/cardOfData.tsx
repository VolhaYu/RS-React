import React from 'react';
import { PropsFormType } from '../../../types';

function CardOfData(props: PropsFormType) {
  const { name, surName, birthday, city, file, HTML, CSS, JS, REACT } = props;
  return (
    <div className="div-data">
      <p className="data-text">
        {name} {surName}
      </p>
      <p className="data-text">Birthday: {birthday}</p>
      <p className="data-text">City: {city}</p>
      <img className="img-card" src={file} alt="avatar" />
      <h3>Scills:</h3>
      <p>
        {HTML} {CSS} {JS} {REACT}
      </p>
    </div>
  );
}

export default CardOfData;
