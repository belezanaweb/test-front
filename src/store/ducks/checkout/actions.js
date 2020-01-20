import { CheckoutTypes } from './types'

export const activeButtonRequest = isActive => {
  return {
    type: CheckoutTypes.IS_ACTIVE_BUTTON,
    payload: { isActive }
  }
}
