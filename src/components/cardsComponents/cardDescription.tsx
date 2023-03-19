import React from 'react';
import { Products } from 'types';

class CardDescription extends React.Component<Products> {
  render() {
    const { title, brand, category, price, rating, discountPercentage } = this.props;
    return (
      <div className="card-description">
        <h3 className="card-title">{title}</h3>
        <div className="wrap-description-brand">
          <p className="description-text">{brand}</p>
          <p className="description-text">{category}</p>
        </div>
        <div className="wrap-description-price">
          <p className="description-text">Price: {price}$</p>
          <p className="description-text">Rating: {rating}*</p>
        </div>
        <p className="description-text">Discont: {discountPercentage}%</p>
      </div>
    );
  }
}
export default CardDescription;
