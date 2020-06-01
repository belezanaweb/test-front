import '@testing-library/jest-dom/extend-expect';
import { init } from '@rematch/core';
import axios from 'axios';

import mock from './__mocks__/cart.json';

import cart from './cart';

jest.mock('axios');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('cart model', () => {
  it('reducer: should do set data about cart.', () => {
    const store = init({
        models: { cart },
    });

    const data = {
      id: 'mock',
      items: [],
      subTotal: 100,
      shippingTotal: 5.9,
      discount: 10,
      total: 95.9,
    };

    store.dispatch.cart.setData(data);

    expect(store.getState().cart).toStrictEqual({
      data,
      isLoading: false,
    })
  });

  it('reducer: should do update isLoading status.', () => {
    const store = init({
        models: { cart },
    });

    store.dispatch.cart.setIsLoading(true);

    expect(store.getState().cart).toStrictEqual({
      data: null,
      isLoading: true,
    })
  });

  it('effects: should to get data about cart.', async () => {
    const store = init({
        models: { cart },
    });

    axios.get = jest.fn().mockResolvedValue({ data: mock });

    await store.dispatch.cart.getCart();

    expect(store.getState().cart).toStrictEqual({
      data: mock,
      isLoading: false,
    });
  });
});
