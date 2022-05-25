import { computeHeadingLevel } from "@testing-library/react";
import React from "react";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.products.find(
        (product) => product.id == props.match.params.id
      ),
    };
  }

  render() {
    const { title, imageUrl, price, size } = this.state.product;

    return (
      <div className="product-item-container">
        <h3>{title}</h3>
        <img src={imageUrl} alt="missing product image" />
        <p>
          <span>{size}</span>
          <span>{price}</span>
        </p>
      </div>
    );
  }
}

export default ProductDetail;
