import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, CartProductsContainer, Title, CartResumeContainer } from '../../components';

const CheckoutCart = function() {
  const history = useHistory();

  return (
    <>
      <Title>Produtos</Title>
      <CartProductsContainer />

      <br />

      <CartResumeContainer />

      <br />

      <Button onClick={() => history.replace('/checkout/cart/payment')}>
        Seguir para pagamento
      </Button>
    </>
  );
};

export default CheckoutCart;
