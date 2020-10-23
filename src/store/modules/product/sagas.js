import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { fetchProductSuccess, fetchProductFailure, FETCH_PRODUCT_REQUEST } from './actions';

export function* fetchProduct() {
  try {
    const response = yield call(api.get, '');

    yield put(fetchProductSuccess(response.data));
  } catch (err) {
    yield put(fetchProductFailure());
  }
}

export default all([takeLatest(FETCH_PRODUCT_REQUEST, fetchProduct)]);
