import {all, takeLatest} from 'redux-saga/effects';

import {Types as ProductsTypes} from '../ducks/products';

import {getProducts} from './products';


export default function* rootSaga() {
  yield all([
    takeLatest(ProductsTypes.GET_REQUEST, getProducts)
  ]);
}
