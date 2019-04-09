import {
  CART_PRODUCTS_SUCCESS,
  CART_PRODUCTS_ERROR,
  CART_PAYMENT_SUCCESS,
  CART_PAYMENT_ERROR,
  CART_DATA_SUCCESS
} from '../constants/actionTypes'

const initialState = {
  cart: {
    discount: '',
    id: '',
    items: [],
    shippingTotal: 0,
    subTotal: 0,
    total: 0,
  },
  payment: {
    card: '',
    nameCard: '',
    validate: '',
    cvv: ''
  },
  error: null,
}

export default function cart (state = initialState, action) {
  switch(action.type) {
    case CART_PRODUCTS_SUCCESS:
    case CART_PAYMENT_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        error: null
      }
    case CART_PRODUCTS_ERROR:
    case CART_PAYMENT_ERROR:
      return {
        ...state,
        cart: null,
        error: action.payload
      }
      case CART_DATA_SUCCESS:
        return {
          ...state,
          cart: action.payload,
          payment: action.payload,
          error: null,
        }
    default:
      return state
  }
}