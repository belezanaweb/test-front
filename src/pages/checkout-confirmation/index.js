import React from 'react';

import {
  CartProductsContainer,
  CartResumeContainer,
  PayamentDataContainer,
  SuccessfulMessage
} from '../../components';

const CheckoutConfirmation = function() {
  return (
    <>
      <SuccessfulMessage>Compra efetuada com sucesso</SuccessfulMessage>
      <PayamentDataContainer />
      <CartProductsContainer showPrices={false} />
      <CartResumeContainer />
    </>
  );
};

export default CheckoutConfirmation;
