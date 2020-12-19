import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store';

import * as actions from '../../store/cart/actions';

import Panel from '../../components/ui/panel';
import Title from '../../components/ui/title';
import Card from '../../components/ui/card';
import CartSummary from '../../components/app/cart-summary';
import Button from '../../components/ui/button';
import VerticalSpacing from '../../components/ui/vertical-spacing';
import Loading from '../../components/ui/loading';

import utils from '../../utils';

function Cart() {
  const { data: cart, loading } = useSelector((state: ApplicationState) => state.cart);
  const history = useHistory();
  const handleClick = () => history.push(`/pagamento/${cart?.id}`);

  return loading ? <Loading /> : (
    cart && (
      <>
        <Panel title={<Title>Produtos</Title>}>
          <>
            {[...cart?.items].map((item) =>
              <Card
                title={item.product.name}
                price={utils.format.currency.toBRL(item.product.priceSpecification.price)}
                image={item.product.imageObjects[0].thumbnail}
              />
            )}
          </>
        </Panel>
        <VerticalSpacing>
          <CartSummary
            subTotal={utils.format.currency.toBRL(cart.subTotal)}
            shippingTotal={utils.format.currency.toBRL(cart.shippingTotal)}
            discount={utils.format.currency.toBRL(cart.discount)}
            total={utils.format.currency.toBRL(cart.total)}
          />
        </VerticalSpacing>
        <Button onClick={handleClick} block={true}>Seguir para o pagamento</Button>
      </>
    )
  );
}

(Cart as Container<{ id: string }>).preload = async ({ store, match }) => {
  const cart = store.getState().cart;
  const cartId = match.params.id;
  const needFetch = !cart.data || cart.data.id !== cartId;
  if (needFetch && !cart.loading) {
    store.dispatch(actions.loadCartRequest(cartId));
  }
};

export default Cart;
