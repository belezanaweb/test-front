import { PAYMENT_ADD } from './payment.types'

export default (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_ADD:
      return { ...action.data }
    default:
      return state
  }
}
