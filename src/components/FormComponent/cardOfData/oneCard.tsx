import React from 'react';
import CardOfData from './cardOfData';
import { PropsFormType } from '../../../types';

function OneCard(props: PropsFormType) {
  const { name, surName, birthday, city, file, scills } = props;
  return (
    <div className="one-card">
      <CardOfData
        name={name}
        surName={surName}
        birthday={birthday}
        city={city}
        file={file}
        scills={scills}
      />
    </div>
  );
}

export default OneCard;
