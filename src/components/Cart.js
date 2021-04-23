import React from 'react';

import ProductList from './ProductList';
import Total from './Total';
import Button from './Button';

const Cart = (props) => {
  const { items, ...total } = props.products;
  return (
    <>
      <div>
        <ProductList products={items} />
        <Total values={total} />
        <Button text={'SEGUIR PARA O PAGAMENTO'} path={'/pay'} />
      </div>
    </>
  );
};

export default Cart;
