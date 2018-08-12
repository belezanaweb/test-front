import { put, call } from 'redux-saga/effects'

import api from '../../services/api'

import { Creators as CartActions } from '../ducks/cart'

export function* fetchItems(action) {
  try {
    const { data } = yield call(api.get)
    yield put(CartActions.fetchSuccess(data))
  } catch (err) {
    console.tron.log(err)
  }
}
