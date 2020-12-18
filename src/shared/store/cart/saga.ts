import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { loadCartApi } from '../../services/cart';
import { actions, types } from './action';

function* loadCart({ id }: ReturnType<typeof actions.loadCartRequest>) {
  try {
    const { data } = yield call(loadCartApi, id);
    yield put(actions.loadCartSuccess(data));
  } catch (e) {
    yield put(actions.loadCartFailure(e.response?.data.message));
  }
}

function* watchLoadCart() {
  yield takeLatest(types.LOAD_CART_REQUEST, loadCart);
}

export default function* () {
  yield all([fork(watchLoadCart)]);
}
