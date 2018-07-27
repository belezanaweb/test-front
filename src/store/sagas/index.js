import { all, takeLatest } from 'redux-saga/effects'
import { fetchItems } from './cart'

import { Types as CartTypes } from '../ducks/cart'

export default function* rootSaga() {
  yield all([takeLatest(CartTypes.FETCH_REQUEST, fetchItems)])
}
