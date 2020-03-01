import React from 'react';
import { Button } from '../../components';
import { useHistory } from 'react-router-dom';

const CheckoutCart = function() {
  const history = useHistory();

  return (
    <>
      <h1>CheckoutCart</h1>
      <Button onClick={() => history.replace('/checkout/cart/payment')}>
        Seguir para pagamento
      </Button>
    </>
  );
};

export default CheckoutCart;
