import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import ProductList from './ProductList';
import Total from './Total';
import Button from './Button';
import NavBar from './NavBar';

const Cart = () => {
  const [toPayment, setToPayment] = useState(false);
  const redirect = () => {
    setToPayment(true);
  };
  return (
    <>
      <NavBar active="cart" />
      <div className="content">
        <ProductList showPrice="true" />
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
