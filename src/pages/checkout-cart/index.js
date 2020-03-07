import React from 'react';
import { Link } from 'react-router-dom';

import { Button, CartProductsContainer, CartResumeContainer } from '../../components';

const CheckoutCart = function() {
  return (
    <>
      <CartProductsContainer />

      <CartResumeContainer />

      <Button as={Link} to="/checkout/cart/payment">
        Seguir para pagamento
      </Button>
    </>
  );
};

export default CheckoutCart;
