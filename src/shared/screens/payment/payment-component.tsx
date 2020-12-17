import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

function Payment() {
  const { data, loading } = useSelector((state: AppState) => state.payment);

  return loading ? (
    <p>loading...</p>
  ) : (
    data && (
      <div>
        <h1>
          {data.id} {data.username} ({data.name})
        </h1>
        <p>
          <b>email:</b> {data.email}
        </p>
      </div>
    )
  );
}

Payment.preload = async ({ store, match }: { store: any, match: any }) => {
  const payment = store.getState().payment;
  const paymentId = match.params.id;
  //const needFetch = !payment.data || payment.data.id !== Number(paymentId);
  //if (needFetch && !payment.loading) {
    //store.dispatch(actions.loadPaymentRequest(paymentId));
  //}
};

export default Payment;
