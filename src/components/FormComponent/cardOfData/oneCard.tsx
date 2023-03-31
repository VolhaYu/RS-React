import React from 'react';
import CardOfData from './cardOfData';
import { PropsFormType } from '../../../types';

function OneCard(props: PropsFormType) {
  const { name, surName, birthday, city, file, scills, HTML, CSS, JS, REACT } = props;
  return (
    <div className="one-card">
      <CardOfData
        name={name}
        surName={surName}
        birthday={birthday}
        city={city}
        file={file}
        scills={scills}
        // HTML={HTML}
        // CSS={CSS}
        // JS={JS}
        // REACT={REACT}
      />
    </div>
  );
}

export default OneCard;
