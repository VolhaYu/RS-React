import React from 'react';
import { Products } from 'types';

class ImageCard extends React.Component<Products> {
  render(): React.ReactNode {
    const { thumbnail } = this.props;
    return <img className="card-img" src={thumbnail} alt="cardImg" />;
  }
}
export default ImageCard;
