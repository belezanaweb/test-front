import React from 'react';
import { connect } from 'react-redux';

const Bag = ({ products }) => (
  <div>
    {products.map(product => (
      <p>{product.name}</p>
    ))}
  </div>
);

export default connect(state => ({ products: state }))(Bag);
