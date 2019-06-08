import {all, takeLatest} from 'redux-saga/effects'

export default function* rootSaga() {
  return yield all([takeLatest()]);
}
