import { handleError } from './api-utils';

describe('Api Utils Handle Errors', () => {
  test('Handle error Response', async () => {
    const errorResponse = {
      response: 'foo',
    };

    handleError(errorResponse).catch((err) => {
      expect(err).toEqual('foo');
    });
  });

  test('Handle error Request', async () => {
    const errorRequest = {
      request: 'bar',
    };

    handleError(errorRequest).catch((err) => {
      expect(err).toEqual('bar');
    });
  });

  test('Handle error Genenric', async () => {
    const errorGeneric = {
      foo: 'bar',
      toJSON: () => 'baz',
    };

    handleError(errorGeneric).catch((err) => {
      expect(err).toEqual('baz');
    });
  });
});
