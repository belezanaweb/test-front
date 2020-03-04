const fetch = require('node-fetch');

import { Types as LoaderTypes } from '../loader';
import reducer, { Types, getCart } from '../cart';

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

describe('cart', () => {
  let store;

  beforeEach(() => {
    store = __createTestStore__();

    beforeEach(() => {
      fetch.resetMocks();
    });
  });

  describe('actions', () => {
    it('should toggle loader and set cart data', async () => {
      fetch.mockResponseOnce(JSON.stringify(CART_RESPONSE));

      await store.dispatch(getCart());

      const [showLoader, cart, hideLoader] = store.getActions();

      expect(showLoader.type).toEqual(LoaderTypes.SHOW);

      expect(cart.type).toEqual(Types.SET);
      expect(cart.payload).toEqual(CART_RESPONSE);

      expect(hideLoader.type).toEqual(LoaderTypes.HIDE);
    });
  });

  describe('reducer', () => {
    it('should return the default state', () => {
      expect(reducer(undefined, {})).toEqual({
        items: [],
        subTotal: 0,
        shippingTotal: 0,
        discount: 0,
        total: 0
      });
    });

    it('should set cart data when pass Type SET', () => {
      expect(
        reducer(undefined, {
          type: Types.SET,
          payload: CART_RESPONSE
        })
      ).toEqual(CART_RESPONSE);
    });
  });
});
