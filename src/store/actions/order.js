import { ACTIONS } from '../constants/actions'

const orderActions = {
  complete: (order) => ({
    payload: order,
    type: ACTIONS.ORDER_COMPLETE
  })
}

export { orderActions }
