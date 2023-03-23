import React from 'react';
import './cardOfData.css';
import { PropsFormType } from '../../types';

class CardOfData extends React.Component<PropsFormType> {
  render(): React.ReactNode {
    const { name, surName, birthday, file, scill } = this.props;
    return (
      <div className="div-data">
        <p className="data-text">
          {name}
          {surName}
          {birthday}
        </p>
      </div>
    );
  }
}

export default CardOfData;
