import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return(<div className="product-base">
      {this.props.name}
    </div>);
  }
}

export default Product;
