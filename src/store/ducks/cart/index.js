import producer from 'immer'
import { CartTypes } from './types'

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        data: action.payload.products,
        loading: false,
        error: false
      }
    // case CartTypes.ADD_TO_CART_SUCCESS:
    //   return producer(state, draft => {
    //     const { products } = action.payload
    //     draft.data.push(products)
    //   })
    case CartTypes.REMOVE_FROM_CART:
      return producer(state, draft => {
        const productIdex = state.data.findIndex(p => p.id === action.payload.id)

        if (productIdex >= 0) {
          draft.data.splice(productIdex, 1)
        }
      })
    case CartTypes.UPDATE_AMOUNT_SUCCESS: {
      return producer(state, draft => {
        const productIdex = state.data.findIndex(p => p.id === action.payload.id)

        if (productIdex >= 0) {
          // @ts-ignore
          draft.data[productIdex].amount = Number(action.payload.amount)
        }
      })
    }
    default:
      return state
  }
}

export default reducer
