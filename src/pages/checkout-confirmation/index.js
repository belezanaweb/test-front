import React from 'react';

import {
  CartProductsContainer,
  CartResumeContainer,
  PayamentDataContainer
} from '../../components';

const CheckoutConfirmation = function() {
  return (
    <>
      <PayamentDataContainer />
      <CartProductsContainer />
      <CartResumeContainer />
    </>
  );
};

export default CheckoutConfirmation;
