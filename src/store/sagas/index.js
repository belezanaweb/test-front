import { all, takeLatest } from "redux-saga/effects";

import { Types as CartTypes } from "../ducks/cart";

import { getCartRequest } from "./cart";

export default function* rootSaga() {
  yield all([takeLatest(CartTypes.GET_REQUEST, getCartRequest)]);
}
