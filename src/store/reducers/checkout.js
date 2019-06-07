const INITIAL_STATE = {
  loading: true,
  products: [],
  frete: 5.3,
  discount: 30
}

function checkout(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_DATA':
      console.log(action.products)
      return {
        ...state,
        products: action.products.data.items
      }
    default:
      return state
  }
}

export default checkout
