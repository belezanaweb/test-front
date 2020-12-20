import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import * as actions from '../../store/cart/actions';

import Panel from '../../components/ui/panel';
import Title from '../../components/ui/title';
import Card from '../../components/ui/card';
import CartSummary from '../../components/app/cart-summary';
import PaymentSummary from '../../components/app/payment-summary';
import VerticalSpacing from '../../components/ui/vertical-spacing';
import Loading from '../../components/ui/loading';

import utils from '../../utils';

function Success() {
  const { data: cart, loading } = useSelector((state: ApplicationState) => state.cart);

  return loading ? (
    <Loading />
  ) : (
    cart && (
      <>
        <VerticalSpacing bottom="medium">
          <PaymentSummary
            creditCardNumber={utils.replace.numbers('1234.1234.1234.1234', 0, 14, '*')}
            name="José da Silva"
            expires="05/2019"
          />
        </VerticalSpacing>

        <Panel title={<Title>Produtos</Title>}>
          <>
            {[...cart?.items].map((item) => (
              <Card
                key={item.product.sku}
                title={item.product.name}
                presentation={true}
                image={item.product.imageObjects[0].thumbnail}
              />
            ))}
          </>
        </Panel>
        <VerticalSpacing top="medium" bottom="large">
          <CartSummary
            subTotal={utils.format.currency.toBRL(cart.subTotal)}
            shippingTotal={utils.format.currency.toBRL(cart.shippingTotal)}
            discount={utils.format.currency.toBRL(cart.discount)}
            total={utils.format.currency.toBRL(cart.total)}
          />
        </VerticalSpacing>
      </>
    )
  );
}

(Success as Container<{ id: string }>).preload = async ({ store, match }) => {
  const cart = store.getState().cart;
  const cartId = match.params.id;
  const needFetch = !cart.data || cart.data.cartId !== cartId;
  if (needFetch && !cart.loading) {
    store.dispatch(actions.loadCartRequest(cartId));
  }
};

export default Success;
