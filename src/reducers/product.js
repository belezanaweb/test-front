const initialState = {
  data: {}
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_DATA':
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}
