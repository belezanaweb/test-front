import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../services/api';
import { fetchProductSuccess, fetchProductFailure } from '../../../store/modules/product/actions';
import { fetchProduct } from '../../../store/modules/product/sagas';
import { productMock } from '../../../utils';

const apiMock = new MockAdapter(api);

describe('Product saga', () => {
  it('should be able to fetch product', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('').reply(200, productMock);

    await runSaga({ dispatch }, fetchProduct).toPromise();

    expect(dispatch).toHaveBeenCalledWith(fetchProductSuccess(productMock));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('').reply(500);

    await runSaga({ dispatch }, fetchProduct).toPromise();

    expect(dispatch).toHaveBeenCalledWith(fetchProductFailure());
  });
});
