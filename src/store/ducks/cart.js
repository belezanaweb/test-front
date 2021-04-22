import preduce from 'immer'

export const Types = {
  GET_CART_ITEMS_REQUEST: '@cart/GET_CART_ITEMS_REQUEST',
  GET_CART_ITEMS_SUCCESS: '@cart/GET_CART_ITEMS_SUCCESS',
  GET_CART_ITEMS_ERROR: '@cart/GET_CART_ITEMS_ERROR',
  SAVE_USER_ITEMS: '@cart/SAVE_USER_ITEMS',
  GET_USER_ITEMS: '@cart/GET_USER_ITEMS'
}

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,
  cartById: {},
  userData: {}
}

export default function cart(state = INITIAL_STATE, action) {
  return preduce(state, (draft) => {
    switch (action.type) {
      case Types.GET_CART_ITEMS_REQUEST: {
        draft.loading = true
        break
      }
      case Types.GET_CART_ITEMS_SUCCESS: {
        draft.loading = false
        draft.success = true
        draft.error = false
        draft.cartById = action.payload.cartValue
        break
      }
      case Types.GET_CART_ITEMS_ERROR: {
        draft.error = true
        draft.loading = false
        draft.success = false
        draft.cartById = {}
        break
      }
      case Types.SAVE_USER_ITEMS: {
        draft.success = true
        draft.userData = action.payload.body
        break
      }
      default:
    }
  })
}

export const Creators = {
  getCartByIdRequest: (id) => ({
    type: Types.GET_CART_ITEMS_REQUEST,
    payload: { id }
  }),
  getCartByIdSuccess: (cartValue) => ({
    type: Types.GET_CART_ITEMS_SUCCESS,
    payload: { cartValue }
  }),
  getCartByIdError: (error) => ({
    type: Types.GET_CART_ITEMS_ERROR,
    payload: { error }
  }),
  saveUser: (body) => ({
    type: Types.SAVE_USER_ITEMS,
    payload: { body }
  })
}
