import { all, fork } from 'redux-saga/effects';

import carts from './carts/saga';

export default function* () {
  yield all([fork(carts)]);
}
