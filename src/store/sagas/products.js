import {call, put} from 'redux-saga/effects';
import api from '../../services/api';

import {Creators as ProductsActions} from '../ducks/products';
import {Creators as ErrorActions} from '../ducks/errors';

export function* getProducts() {
  try {
    const response = yield call(api.get)
    yield put(ProductsActions.getProductsSuccess(response.data))
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possivel obter os produtos'))
  }
}
