import React from 'react';
import Card from './card';
import './cards.css';
import products from '../../assets/productsData';
import { Products } from '../../types';

class Cards extends React.Component<Products> {
  render() {
    return (
      <div className="wrap-cards" data-testid="card-product-list">
        {products.map((product) => (
          <Card
            thumbnail={product.thumbnail}
            title={product.title}
            brand={product.brand}
            category={product.category}
            price={product.price}
            rating={product.rating}
            discountPercentage={product.discountPercentage}
            key={product.id}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
