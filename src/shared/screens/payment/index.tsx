import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import CartSummary from '../../components/app/cart-summary';
import PaymentForm from '../../components/app/payment-form';
import VerticalSpacing from '../../components/ui/vertical-spacing';
import Loading from '../../components/ui/loading';

import utils from '../../utils';

const Payment = () => {
  const { data: cart, loading } = useSelector((state: ApplicationState) => state.cart);
  const history = useHistory();
  const handleClick = () => history.push(`/sucesso/${cart?.id}`);

  return loading ? <Loading /> : (
    cart && (
    <>
      <PaymentForm
        html={
          <VerticalSpacing>
            <CartSummary
              subTotal={utils.format.currency.toBRL(cart.subTotal)}
              shippingTotal={utils.format.currency.toBRL(cart.shippingTotal)}
              discount={utils.format.currency.toBRL(cart.discount)}
              total={utils.format.currency.toBRL(cart.total)}
            />
          </VerticalSpacing>
        }
        onClick={handleClick}
      />
    </>
    )
  );
}

export default Payment;
