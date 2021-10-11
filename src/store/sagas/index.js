import { all } from 'redux-saga/effects'
import cart from './cart.sagas'

function* sagas() {
  yield all([cart])
}

export default sagas
