import React from 'react';

import CartResumeContainer from '~/components/CartResumeContainer';
import PaymentFormContainer from '~/components/PaymentFormContainer';

const CheckoutPayment = () => {
  return (
    <>
      <PaymentFormContainer>
        <CartResumeContainer />
      </PaymentFormContainer>
    </>
  );
};

export default CheckoutPayment;
