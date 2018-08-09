import { all, takeLatest } from "redux-saga/effects";
import { cartSendSuccess } from "./cart";

export default function* rootSaga() {
  yield all([takeLatest("CART_REQUEST", cartSendSuccess)]);
}
