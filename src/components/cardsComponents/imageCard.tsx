import React from "react";
import { Products } from "types";

class ImageCard extends React.Component<Products> {
  constructor(props: Products) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <img className="card-img" src={this.props.thumbnail} alt="cardImg" />
    );
  }
}
export default ImageCard;