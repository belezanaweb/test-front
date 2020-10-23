import reducer from '../../../store/modules/product/reducer';
import * as actions from '../../../store/modules/product/actions';

describe('Product reducer', () => {
  it('FETCH_PRODUCT_SUCCESS', () => {
    const state = reducer({ isLoading: false }, actions.fetchProductSuccess({ test: 'test' }));

    expect(state.test).toStrictEqual('test');
  });

  it('FETCH_PRODUCT_FAILURE', () => {
    const state = reducer({ isLoading: false }, actions.fetchProductFailure());

    expect(state.isLoading).toStrictEqual(false);
  });
});
