import reducer from '~/store/ducks/cart';

import { Types } from '~/store/ducks/cart/types';

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

describe('Cart Reducer', () => {
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
