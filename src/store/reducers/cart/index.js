import actionsTypes from '../../actionTypes/cart'

const INITIAL_STATE = {
  cartInfo: {
    discount: null,
    id: null,
    items: [],
    shippingTotal: null,
    subTotal: null,
    total: null
  }
}

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionsTypes.HANDLECARTINFO:
      return {
        ...state,
        cartInfo: action.cartInfo
      }
    default:
      return state
  }
}

export default cart
