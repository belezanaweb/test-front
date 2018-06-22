const cart = (state = [], action) => {
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
