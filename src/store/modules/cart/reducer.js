export default function cart(state = [], action) {
  switch(action.type) {
    case "SET_PRODUCTS":
    return {...state, productsCart: action.products}
    default:
    return state
  }
};
