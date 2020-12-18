import * as React from 'react';

import CartSummary from '../../components/ui/cart-summary';
import PaymentForm from '../../components/app/payment-form';

const Payment = () => {
  return (
    <div>
      <PaymentForm
        html={
          <>
            <br />
            <br />
            <CartSummary subTotal={624.8} shippingTotal={5.3} discount={30} total={618.9} />
            <br />
            <br />
          </>
        }
      />
    </div>
  );
}

export default Payment;
