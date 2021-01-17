import { all } from 'redux-saga/effects'

import cartSaga from './modules/cart/saga'

export const allSagas = [cartSaga()]

/**
 * Builds a list of sagas that will be used to make a proxy for some redux actions.
 * See more at https://redux-saga.js.org/.
 */
export default () =>
  function* rootSaga() {
    yield all(allSagas)
  }
