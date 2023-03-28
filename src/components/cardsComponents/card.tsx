import React from 'react';
import { Products } from 'types';
import CardDescription from './cardDescription';
import ImageCard from './imageCard';

function Card(props: Products) {
  const { thumbnail, id, title, brand, category, price, rating, discountPercentage } = props;
  return (
    <div className="card-product" data-testid="card-product-item">
      <ImageCard thumbnail={thumbnail} key={id} />
      <CardDescription
        title={title}
        brand={brand}
        category={category}
        price={price}
        rating={rating}
        discountPercentage={discountPercentage}
        key={id}
      />
    </div>
  );
}

export default Card;
