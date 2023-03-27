import React from 'react';
import CardOfData from './cardOfData';
import { PropsFormType } from '../../types';

class OneCard extends React.Component<PropsFormType> {
  render(): React.ReactNode {
    const { name, surName, birthday, city, file, HTML, CSS, JS, REACT } = this.props;
    return (
      <div className="one-card">
        <CardOfData
          name={name}
          surName={surName}
          birthday={birthday}
          city={city}
          file={file}
          HTML={HTML}
          CSS={CSS}
          JS={JS}
          REACT={REACT}
        />
      </div>
    );
  }
}

export default OneCard;
