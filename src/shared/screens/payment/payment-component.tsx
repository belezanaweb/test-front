import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

import CartSummary from '../../components/ui/cart-summary';
import PaymentForm from '../../components/app/payment-form';

const Payment = () => {
  const { data, loading } = useSelector((state: AppState) => state.payment);

  return loading ? (
    <p>loading...</p>
  ) : (
    data && (
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
    )
  );
};

Payment.preload = async ({ store, match }: { store: any; match: any }) => {
  const payment = store.getState().payment;
  const paymentId = match.params.id;
  //const needFetch = !payment.data || payment.data.id !== Number(paymentId);
  //if (needFetch && !payment.loading) {
  //store.dispatch(actions.loadPaymentRequest(paymentId));
  //}
};

export default Payment;
