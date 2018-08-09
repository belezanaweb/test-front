import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as CartActions } from "../ducks/cart";

export function* getCartRequest() {
  try {
    const response = yield call(api.get, "/5b15c4923100004a006f3c07");
    yield put(CartActions.getCartSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
