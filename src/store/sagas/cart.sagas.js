import { call, put, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'
import { CartTypes, CartActions } from '../ducks/cart.ducks'

function* getCartRequest() {
  try {
    const response = yield call(axios.get, 'http://www.mocky.io/v2/5b15c4923100004a006f3c07')

    yield put(CartActions.cartSuccess(response.data))
  } catch (error) {
    yield put(CartActions.cartFailure(error))
  }
}

export default all([takeLatest(CartTypes.CART_REQUEST, getCartRequest)])
