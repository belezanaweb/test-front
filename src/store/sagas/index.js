import { all, takeLatest } from 'redux-saga/effects'

import { getCartById } from './cart'
import { Types as CartActions } from '../ducks/cart'

export default function* rootSaga() {
  yield all([takeLatest(CartActions.GET_CART_ITEMS_REQUEST, getCartById)])
}
