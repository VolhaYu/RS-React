import React from 'react';
import { Products } from 'types';

function ImageCard(props: Products) {
  const { thumbnail } = props;
  return <img className="card-img" src={thumbnail} alt="cardImg" />;
}
export default ImageCard;
