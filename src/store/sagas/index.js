import { retry, put } from 'redux-sage/effects'
import { CheckoutAPI } from '../../services/api'
import { Creators as CartActions } from '../ducks'

export function* getCartById() {
  try {
    const response = yield retry(2, 2000, CheckoutAPI.get, 'v2/5b15c4923100004a006f3c07')

    yield put(CartActions.getCartByIdSuccess(response.data))
  } catch (error) {
    yield put(CartActions.getCartByIdError(error))
  }
}
