import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

function Cart() {
  const { data, loading } = useSelector((state: AppState) => state.cart);

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

Cart.preload = async ({ store, match }: { store: any, match: any }) => {
  const cart = store.getState().cart;
  const cartId = match.params.id;
  //const needFetch = !cart.data || cart.data.id !== Number(cartId);
  //if (needFetch && !cart.loading) {
    //store.dispatch(actions.loadCartRequest(cartId));
  //}
};

export default Cart;
