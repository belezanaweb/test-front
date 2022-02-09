import { takeLatest, all, put, call } from 'redux-saga/effects';

import { cartSuccess, cartFailure, setCartLoading } from './actions';
import { TYPE_CART_REQUEST } from '../../../constants/types-reducers';
import { setToLocalStorage } from '../../../helpers/local-storage';
import { BELEZA_NA_WEB_CART } from '../../../constants/local-storage';

import api from '../../../services/api';

export function* getCart() {
  try {
    const url = '/5b15c4923100004a006f3c07';

    const response = yield call(api.get, url, null);

    yield put(cartSuccess(response.data));

    yield put(setToLocalStorage(BELEZA_NA_WEB_CART, response.data));

    yield put(setCartLoading(false));
  } catch (err) {
    const error = err.result ? err.result : { message: 'Erro ao buscar cart.' };
    yield put(cartFailure(error));
  }
}

export default all([takeLatest(TYPE_CART_REQUEST, getCart)]);
