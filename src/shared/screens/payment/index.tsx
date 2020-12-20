import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import * as actions from '../../store/cart/actions';

import CartSummary from '../../components/app/cart-summary';
import PaymentForm from '../../components/app/payment-form';
import VerticalSpacing from '../../components/ui/vertical-spacing';
import Loading from '../../components/ui/loading';

import utils from '../../utils';

const Payment = () => {
  const { data: cart, loading } = useSelector((state: ApplicationState) => state.cart);
  const history = useHistory();
  const handleClick = () => history.push(`/sucesso/${cart?.cartId}`);

  return loading ? (
    <Loading />
  ) : (
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
};

(Payment as Container<{ id: string }>).preload = async ({ store, match }) => {
  const cart = store.getState().cart;
  const cartId = match.params.id;
  const needFetch = !cart.data || cart.data.cartId !== cartId;
  if (needFetch && !cart.loading) {
    store.dispatch(actions.loadCartRequest(cartId));
  }
};

export default Payment;
