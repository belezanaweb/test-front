import { takeLatest, all, put, call } from 'redux-saga/effects';
import { cartSuccess, cartFailure, setLoadingUserSearch } from './actions';
import { TYPE_CART_REQUEST } from '../../../constants/types-reducers';
import api from '../../../services/api';

export function* getCart() {
  try {
    const url = '/5b15c4923100004a006f3c07';

    const response = yield call(api.get, url, null);

    yield put(cartSuccess(response));

    yield put(setLoadingUserSearch(false));
  } catch (err) {
    const error = err.result ? err.result : { message: 'Erro ao buscar cart.' };
    yield put(cartFailure(error));
  }
}

export default all([takeLatest(TYPE_CART_REQUEST, getCart)]);
