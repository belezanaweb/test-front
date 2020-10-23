import { all, put, takeLatest, call } from 'redux-saga/effects';

import apiCreditCardMock from '../../../services/apiCreditCardMock';
import { creditCardStorageName } from '../../../utils';

import { postCreditCardSuccess, postCreditCardFailure, POST_CREDIT_CARD_REQUEST } from './actions';

export function* postCreditCard(action) {
  try {
    if (action && action.payload && action.payload.data) {
      localStorage.setItem(creditCardStorageName, JSON.stringify(action.payload.data));
    } else {
      console.error('action or action.payload is undefined');
    }

    const response = yield call(apiCreditCardMock.post, 'creditCards', action);

    yield put(postCreditCardSuccess(response.data));
  } catch (err) {
    console.error(err);

    yield put(postCreditCardFailure());
  }
}

export default all([takeLatest(POST_CREDIT_CARD_REQUEST, postCreditCard)]);
