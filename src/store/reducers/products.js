import { ACTIONS } from '../constants/actions'

const initialState = {
  isLoading: true
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.PRODUCTS_GET: {
      return action.payload
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export { products }
