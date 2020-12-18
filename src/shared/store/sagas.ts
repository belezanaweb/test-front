import { all, fork } from 'redux-saga/effects';

import cart from './cart/saga';

export default function* () {
  yield all([fork(cart)]);
}
