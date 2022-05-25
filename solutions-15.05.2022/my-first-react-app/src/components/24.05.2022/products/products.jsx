import React from "react";
import productsData from "../store/store";
import ProductDetail from "./productDetail";
import { Link } from "react-router-dom";
import "./products.styles.css";

class ProductItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { title, imageUrl, price, size } = this.props;
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

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    this.setState({ products: productsData });
  }

  render() {
    return (
      <div className="products-container">
        {this.state.products.map((product) => {
          const { title, imageUrl, price, size, id } = product;
          return (
            <Link to={`productDetail/${id}`} key={id}>
              <ProductItem
                title={title}
                imageUrl={imageUrl}
                price={price}
                size={size}
              />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Products;
