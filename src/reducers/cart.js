const cart = (state = {subTotal: 0, shippingTotal: 0, discount: 0, total: 0, items: []}, action) => {
  switch (action.type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        subTotal: action.payload.subTotal,
        shippingTotal: action.payload.shippingTotal,
        discount: action.payload.discount,
        total: action.payload.total,
        items: action.payload.items
      }
    default:
      return state
  }
}

export default cart;
