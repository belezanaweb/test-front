import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { loadCartApi } from '../../services/cart';
import { loadCartSuccess, loadCartFailure, loadCartRequest } from './actions';
import { CartTypes } from './types';

function* loadCart({ payload: { id } }: ReturnType<typeof loadCartRequest>) {
  try {
    const { data } = yield call(loadCartApi, id);
    yield put(loadCartSuccess(data, id));
  } catch (e) {
    yield put(loadCartFailure(e.response?.data.message));
  }
}

function* watchLoadCart() {
  yield takeLatest(CartTypes.LOAD_REQUEST, loadCart);
}

export default function* () {
  yield all([fork(watchLoadCart)]);
}
