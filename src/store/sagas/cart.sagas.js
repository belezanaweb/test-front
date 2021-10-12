import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { CartTypes, CartActions } from '../ducks/cart.ducks'

export default function* getCartRequest() {
  try {
    const response = yield call(axios.get, 'http://www.mocky.io/v2/5b15c4923100004a006f3c07')

    yield put(CartActions.cartSuccess(response.data))
  } catch (error) {
    yield put(CartActions.cartFailure(error))
  }
}

export function* watchSagas() {
  yield takeLatest(CartTypes.CART_REQUEST, getCartRequest)
}
