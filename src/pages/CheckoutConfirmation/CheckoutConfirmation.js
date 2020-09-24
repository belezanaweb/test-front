import React from 'react';

import CartProductsContainer from '~/components/CartProductsContainer';
import CartResumeContainer from '~/components/CartResumeContainer';
import CheckoutSuccess from '~/components/CheckoutSuccess';
import PaymentDataContainer from '~/components/PaymentDataContainer';

const CheckoutConfirmation = () => {
  return (
    <>
      <CheckoutSuccess />
      <PaymentDataContainer />
      <CartProductsContainer />
      <CartResumeContainer />
    </>
  );
};

export default CheckoutConfirmation;
