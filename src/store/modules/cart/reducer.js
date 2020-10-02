export default function cart(state = [], action) {
  console.log(state)
  switch(action.type) {
    case "SET_PRODUCTS":
     return {...state, productsCart: action.products}
    case "SET_CARD_DATA":
      return {...state, dataCard: action.data}
    default:
    return state
  }
};
