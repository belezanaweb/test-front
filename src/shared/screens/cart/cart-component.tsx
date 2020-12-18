import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

import { actions } from '../../store/carts/action';

import Panel from '../../components/ui/panel';
import Title from '../../components/ui/title';
import Card from '../../components/ui/card';
import CartSummary from '../../components/ui/cart-summary';
import Button from '../../components/ui/button';

function Cart() {
  const { data: cart, loading } = useSelector((state: AppState) => state.carts.cart);

  return loading ? (
    <p>loading...</p>
  ) : (
    cart && (
      <>
        <Panel title={<Title>Produtos</Title>}>
          <>
            <Card
              title="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
              price={225.9}
              image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            />
            <Card
              title="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
              price={225.9}
              image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            />
            <Card
              title="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
              price={225.9}
              image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            />
          </>
        </Panel>
        <br />
        <br />
        <CartSummary subTotal={624.8} shippingTotal={5.3} discount={30} total={618.9} />
        <br />
        <br />
        <Button>Seguir para o pagamento</Button>
      </>
    )
  );
};

(Cart as Container<{ id: string }>).preload = async ({ store, match }) => {
  const cart = store.getState().carts.cart;
  const cartId = match.params.id;
  const needFetch = !cart.data || cart.data.id !== cartId;
  if (needFetch && !cart.loading) {
    store.dispatch(actions.loadCartRequest('5b15c4923100004a006f3c07')); // cartId
  }
};

export default Cart;
