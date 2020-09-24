import React from 'react';

import CartProductsContainer from '~/components/CartProductsContainer';
import CartResumeContainer from '~/components/CartResumeContainer';
import PaymentDataContainer from '~/components/PaymentDataContainer';

const CheckoutConfirmation = () => {
  return (
    <>
      <PaymentDataContainer />
      <CartProductsContainer />
      <CartResumeContainer />
    </>
  );
};

export default CheckoutConfirmation;
