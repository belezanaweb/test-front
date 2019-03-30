const initialState = {
  data: {},
  dataCard: {}
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_DATA':
      return {
        ...state,
        data: action.data
      }
    case 'CARD_CREDIT_DATA':
      return {
        ...state,
        dataCard: action.dataCard
      }
    default:
      return state
  }
}
