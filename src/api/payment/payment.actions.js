/*** Resources*/
import { PAYMENT_ADD } from './payment.types'

const ADD = data => dispatch => {
  try {
    return new Promise(resolve => resolve(dispatch({ type: PAYMENT_ADD, data })))
  } catch (e) {
    return e.message
  }
}

export const paymentActions = { ADD }
