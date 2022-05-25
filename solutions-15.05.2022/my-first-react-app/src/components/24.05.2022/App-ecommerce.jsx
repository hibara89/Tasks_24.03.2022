import React from "react";
import Header from "./header/header";
import Products from "./products/products";

import HomePage from "./homepage/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./products/productDetail";
import productsData from "./store/store";

class Ecommerce extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" component={Products} />
            <Route
              path="/productDetail/:id"
              render={(props) => {
                return <ProductDetail {...props} products={productsData} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Ecommerce;
