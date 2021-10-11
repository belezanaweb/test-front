import { createActions, createReducer } from 'reduxsauce'

export const { Types: CartTypes, Creators: CartActions } = createActions({
  cartRequest: [],
  cartSuccess: ['payload'],
  cartFailure: ['error'],
  getCreditCardData: ['payload']
})

const INITIAL_STATE = {
  cartData: [],
  isLoading: false,
  requestError: '',
  creditCardData: {}
}

const cartRequest = () => ({
  isLoading: true
})

const cartSuccess = (state, { payload }) => ({
  ...state,
  cartData: payload,
  isLoading: false
})

const cartFailure = (state, { error }) => ({
  isLoading: false,
  requestError: error
})

const getCreditCardData = (state, { payload }) => ({
  ...state,
  creditCardData: payload
})

export default createReducer(INITIAL_STATE, {
  [CartTypes.CART_REQUEST]: cartRequest,
  [CartTypes.CART_SUCCESS]: cartSuccess,
  [CartTypes.CART_FAILURE]: cartFailure,
  [CartTypes.GET_CREDIT_CARD_DATA]: getCreditCardData
})
