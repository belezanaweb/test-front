export const Types = {
  GET_REQUEST: 'GET_REQUEST',
  GET_SUCCESS: 'GET_SUCCESS',
}

const INITIAL_STATE = {
  shoppingCart: {},
  items:[]
}

export default function products(state= INITIAL_STATE, action){
  switch (action.type) {
    case Types.GET_REQUEST:
      return {...state, }
    case Types.GET_SUCCESS:
      return {...state, shoppingCart: action.shoppingCart, items: action.shoppingCart.items}
    default:
      return state;
  }
}

export const Creators = {
  getProductsRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getProductsSuccess: data => ({
    type: Types.GET_SUCCESS,
    shoppingCart: data,
    items: data.items
  })
}
