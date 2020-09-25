import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getCart } from '~/store/ducks/cart/actions';
import { Types } from '~/store/ducks/cart/types';

import { Types as LoaderTypes } from '~/store/ducks/loader/types';

const apiMock = new MockAdapter(axios);

const CART_RESPONSE = {
  items: [
    {
      image: 'medium image'
    }
  ],
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 618.9
};

describe('Cart Actions', () => {
  let store;

  beforeEach(() => {
    store = __createTestStore__();
  });

  it('should toggle loader and set cart data', async () => {
    apiMock
      .onGet('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .reply(200, JSON.stringify(CART_RESPONSE));

    await store.dispatch(getCart());

    const [showLoader, cart, hideLoader] = store.getActions();

    expect(showLoader.type).toEqual(LoaderTypes.SHOW);

    expect(cart.type).toEqual(Types.SET);
    expect(cart.payload).toEqual(CART_RESPONSE);

    expect(hideLoader.type).toEqual(LoaderTypes.HIDE);
  });
});
