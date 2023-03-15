import React from "react";
import { Products } from "types";

class CardDescription extends React.Component<Products> {
  constructor(props: Products) {
    super(props);
  }
  render() {
    return (
      <div className="card-description">
        <h3 className="card-title">{this.props.title}</h3>
        <div className="wrap-description-brand">
          <p className="description-text">{this.props.brand}</p>
          <p className="description-text">{this.props.category}</p>
        </div>
        <div className="wrap-description-price">
          <p className="description-text">Price: {this.props.price}$</p>
          <p className="description-text">Rating: {this.props.rating}*</p>
        </div>
        <p className="description-text">Discont: {this.props.discountPercentage}%</p>
      </div>
    );
  }
}
export default CardDescription;