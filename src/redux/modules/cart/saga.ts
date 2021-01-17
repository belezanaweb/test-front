import { call, put, takeLatest } from 'redux-saga/effects'

import * as type from './actionTypes'
import * as actions from './actions'

import { ICart } from './types/IState'

// In a real application, the cart id should be received as parameter
export const fetchCartData = () =>
  fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    .then((response) => response.json())
    .then((data) => data)

/**
 * Gets cart's data and save it on store
 *
 * @export
 */
export function* getProducts() {
  try {
    const data: ICart = yield call(fetchCartData)
    yield put(actions.save(data))
  } catch (error) {
    // Here we can handle errors
    console.log(error)
  }
}

/*
 * Intercept listed actions and execute each associated methods
 */
export default function* cartSaga() {
  yield takeLatest(type.GET_PRODUCTS, getProducts)
}
