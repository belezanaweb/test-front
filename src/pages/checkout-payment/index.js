import React from 'react';

import { CartResumeContainer, PaymentFormContainer } from '../../components';

const CheckoutPayment = function() {
  return (
    <>
      <PaymentFormContainer>
        <CartResumeContainer />
      </PaymentFormContainer>
    </>
  );
};

export default CheckoutPayment;
