import * as React from 'react';

import CartSummary from '../../components/app/cart-summary';
import PaymentForm from '../../components/app/payment-form';
import VerticalSpacing from '../../components/ui/vertical-spacing';

import utils from '../../utils';

const Payment = () => {
  return (
    <div>
      <PaymentForm
        html={
          <VerticalSpacing>
            <CartSummary
              subTotal={utils.format.currency.toBRL(624.8)}
              shippingTotal={utils.format.currency.toBRL(5.3)}
              discount={utils.format.currency.toBRL(30)}
              total={utils.format.currency.toBRL(618.9)}
            />
          </VerticalSpacing>
        }
      />
    </div>
  );
};

export default Payment;
