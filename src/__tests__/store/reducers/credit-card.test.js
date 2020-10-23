import reducer from '../../../store/modules/credit-card/reducer';
import * as actions from '../../../store/modules/credit-card/actions';

describe('Credit card reducer', () => {
  it('POST_CREDIT_CARD_SUCCESS', () => {
    const state = reducer({ isLoading: false }, actions.postCreditCardSuccess({ test: 'test' }));

    expect(state.test).toStrictEqual('test');
  });

  it('POST_CREDIT_CARD_FAILURE', () => {
    const state = reducer({ isLoading: false }, actions.postCreditCardFailure());

    expect(state.isLoading).toStrictEqual(false);
  });
});
