export const Types = {
  LOADING: 'cart/LOADING',
  ERROR: 'cart/ERROR',
  SUCCESS: 'cart/SUCCESS',
}

const INITIAL_STATE = { data: { items: [], shippingTotal: 0, subTotal: 0, total: 0, discount: 0 } }

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOADING:
      return { ...state, loading: true, hasError: false }
    case Types.ERROR:
      return { ...state, hasError: true, loading: false, error: action.error }
    case Types.SUCCESS:
      return { ...state, hasError: false, error: null, loading: false, data: action.data }
    default:
      return state
  }
}
