import '@testing-library/jest-dom/extend-expect';
import { init } from '@rematch/core';

import creditCard from './creditCard';

describe('creditCard model', () => {
  it('reducer: should do set data about creditCard.', () => {
    const store = init({
        models: { creditCard },
    });

    const data = {
      id: 'mock',
      number: '5507.6695.7339.8053',
      expiringDate: '10/2020',
      name: 'John Joe',
      code: '4305',
    };

    store.dispatch.creditCard.setData(data);

    expect(store.getState().creditCard).toStrictEqual({
      data,
      isLoading: false,
    })
  });

  it('reducer: should do update isLoading status.', () => {
    const store = init({
        models: { creditCard },
    });

    store.dispatch.creditCard.setIsLoading(true);

    expect(store.getState().creditCard).toStrictEqual({
      data: null,
      isLoading: true,
    })
  });

  it('effects: should to save a new credit card with response a id.', async () => {
    const store = init({
        models: { creditCard },
    });

    const payload = {
      number: '5507.6695.7339.8053',
      expiringDate: '10/2020',
      name: 'John Joe',
      code: '4305',
    };

    const data = {
      id: 'one',
      number: '8053',
      expiringDate: '10/2020',
      name: 'JOHN JOE',
    }

    await store.dispatch.creditCard.save(payload);

    expect(store.getState().creditCard).toStrictEqual({
      data,
      isLoading: false,
    });
  });
});
