import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { cartSuccess } from "../actions/cart";

export function* cartSendSuccess(action) {
  try {
    const res = yield call(api.get, "/5b15c4923100004a006f3c07");
    yield put(cartSuccess(res.data));
  } catch (error) {
    console.error(error);
  }
}
