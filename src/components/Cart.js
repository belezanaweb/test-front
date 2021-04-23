import React from 'react';

import ProductList from './ProductList';
import Total from './Total';
import Button from './Button';
import NavBar from './NavBar';

const Cart = (props) => {
  const { items, ...total } = props.products;
  return (
    <>
      <NavBar active="cart" />
      <div className="content">
        <ProductList products={items} />
        <Total values={total} />
        <Button text={'SEGUIR PARA O PAGAMENTO'} path={'/pay'} />
      </div>
    </>
  );
};

export default Cart;
