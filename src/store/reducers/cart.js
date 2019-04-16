import { ActionTypeEnum } from "../actions/cart";

const defaultState = {
  loading: true,
  loaded: false,
  cartItems: [],
  totalizers: {
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0,
  }
}

/**
 * Inserts the action inside the state
 * @param {any} state
 * @param {{type: string, data: any}} action
 */
export function cart(state = defaultState, action) {
  switch (action.type) {
    case ActionTypeEnum.ADD_PRODUCTS:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          ...action.data,
        ],
      }
    case ActionTypeEnum.UPDATE_TOTALIZERS:
      return {
        ...state,
        totalizers: {
          ...state.totalizers,
          ...action.data,
        },
      }
    case ActionTypeEnum.START_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ActionTypeEnum.FINISH_LOADING:
      return {
        ...state,
        loaded: true,
        loading: false,
      }
    default:
      return state
  }
}

