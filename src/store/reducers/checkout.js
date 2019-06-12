const INITIAL_STATE = {
  loading: true,
  cart: {
    items: []
  },
  subTotal: 0,
  shippingTotal: 0,
  discount: 0,
  total: 0,
  flash: false
}

function checkout(state = INITIAL_STATE, action) {
  // console.log(action)
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        cart: action.cart.data,
        subTotal: action.cart.data.subTotal,
        shippingTotal: action.cart.data.shippingTotal,
        discount: action.cart.data.discount,
        total: action.cart.data.total
      }
    case 'GET_DATA_ERROR':
      return {
        ...state,
        flash: true
      }
    default:
      return state
  }
}

export default checkout
