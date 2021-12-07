export const callAllReducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCTS':
      return { ...state, products: action.payload }
    case 'PAYMENTS':
      return { ...state, payments: action.payload }
    default:
      return state
  }
}
