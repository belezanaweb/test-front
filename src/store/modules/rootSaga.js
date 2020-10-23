import { all } from 'redux-saga/effects';

import product from './product/sagas';
import creditCard from './credit-card/sagas';

export default function* rootSaga() {
  return yield all([product, creditCard]);
}
