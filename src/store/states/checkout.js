const SAVE_CHECKOUT = 'belezanaweb/checkout/SAVE_CHECKOUT'

const initialState = {
  data: {}
}

export default function checkout (state = initialState, action) {
  switch (action.type) {
    case SAVE_CHECKOUT:
      return {
        ...state,
        data: action.payload.data
      }
    default:
      return state
  }
}

export const updateCheckout = data => dispatch => {
  dispatch(saveCheckout(data))
}

const saveCheckout = data => ({
  type: SAVE_CHECKOUT,
  payload: { data }
})