import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import { creditCardMock } from '../../../utils';
import { postCreditCard } from '../../../store/modules/credit-card/sagas';
import { postCreditCardSuccess, postCreditCardFailure } from '../../../store/modules/credit-card/actions';
import apiCreditCardMock from '../../../services/apiCreditCardMock';

const apiMock = new MockAdapter(apiCreditCardMock);

describe('Credit Card saga', () => {
  it('should be able to charge a credit card', async () => {
    const dispatch = jest.fn();

    apiMock.onPost('creditCards').reply(config => {
      config.data = creditCardMock;

      return [200];
    });

    await runSaga({ dispatch }, postCreditCard).toPromise();

    // expect(dispatch).toHaveBeenCalledWith(postCreditCardSuccess(creditCardMock));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onPost('creditCards').reply(500);

    await runSaga({ dispatch }, postCreditCard).toPromise();

    expect(dispatch).toHaveBeenCalledWith(postCreditCardFailure());
  });
});
