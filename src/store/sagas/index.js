import { all } from 'redux-saga/effects'
import * as cart from './cart.sagas'

function* sagas() {
  yield all([cart.watchSagas()])
}

export default sagas
