import React from 'react';

import ProductList from './ProductList';

const Cart = (props) => {
  const { items, ...total } = props.products;
  return (
    <>
      <div>
        <ProductList products={items} />
      </div>
    </>
  );
};

export default Cart;
