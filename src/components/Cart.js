import React, { useState } from 'react';

import ProductList from './ProductList';
import Total from './Total';
import Button from './Button';
import NavBar from './NavBar';

import { Redirect } from 'react-router-dom';

const Cart = () => {
  const [toPayment, setToPayment] = useState(false);
  const redirect = () => {
    setToPayment(true);
  };
  return (
    <>
      <NavBar active="cart" />
      <div className="content">
        <ProductList />
        {localStorage.getItem('belezanawebCartProducts') !== null ? (
          <>
            <Total />
            <Button text={'seguir para o pagamento'} action={() => redirect} />
          </>
        ) : null}
      </div>
      {toPayment && <Redirect to="/pay" />}
    </>
  );
};

export default Cart;
