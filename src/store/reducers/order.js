import { ACTIONS } from '../constants/actions'

const initialState = {
  isOrderComplete: false
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ORDER_COMPLETE: {
      return { ...state, ...action.payload }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export { order }
