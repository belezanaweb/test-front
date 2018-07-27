import { put, call } from 'redux-saga/effects'

import api from '../../services/api'

import { Creators as CartActions } from '../ducks/cart'

export function* fetchItems(action) {
  try {
    const { data } = yield call(api.get)
    console.tron.log(data)
    //yield put(CartActions.fetchSuccess())
  } catch (err) {
    console.tron.log(err)
  }
}
