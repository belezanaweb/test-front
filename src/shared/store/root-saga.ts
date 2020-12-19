import { all, fork } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* () {
  yield all([fork(cart)]);
}
