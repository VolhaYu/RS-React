import React from "react";
import { Products } from "types";
import CardDescription from "./cardDescription";
import ImageCard from "./imageCard";

class Card extends React.Component<Products> {
  constructor(props: Products) {
    super(props);
  }
  render() {
    return (
      <div className="card-product">
        <ImageCard thumbnail={this.props.thumbnail} key={this.props.id} />
        <CardDescription
          title={this.props.title}
          brand={this.props.brand} 
          category={this.props.category}
          price={this.props.price}
          rating={this.props.rating}
          discountPercentage={this.props.discountPercentage}
          key={this.props.id} 
        />
      </div>
    )
  }
}

export default Card;
