import React from 'react';
import { Link } from 'react-router-dom';

import { Button, CartProductsContainer, Title, CartResumeContainer } from '../../components';

const CheckoutCart = function() {
  return (
    <>
      <Title>Produtos</Title>
      <CartProductsContainer />

      <CartResumeContainer />

      <Button as={Link} to="/checkout/cart/payment">
        Seguir para pagamento
      </Button>
    </>
  );
};

export default CheckoutCart;
