import React, { Component } from 'react';
import ProductList from '../components/ProdutctList';

class Cart extends Component {
  render() {
    return (
      <div>
        Cart
        <ProductList />
      </div>
    );
  }
}

export default Cart;