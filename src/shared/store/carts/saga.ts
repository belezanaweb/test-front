import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { loadCartApi, loadCartsApi } from '../../services/cart';
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

function* loadCarts() {
  try {
    const { data } = yield call(loadCartsApi);
    yield put(actions.loadCartsSuccess(data));
  } catch (e) {
    yield put(actions.loadCartsFailure(e.response?.data.message));
  }
}

function* watchLoadCarts() {
  yield takeLatest(types.LOAD_CARTS_REQUEST, loadCarts);
}

export default function* () {
  yield all([fork(watchLoadCart), fork(watchLoadCarts)]);
}
