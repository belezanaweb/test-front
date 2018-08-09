import api from '../../services/api'

const PRODUCTS_REQUEST = 'belezanaweb/card/PRODUCTS_GET'
const PRODUCTS_SUCCESS = 'belezanaweb/card/PRODUCTS_SUCCESS'
const PRODUCTS_ERROR = 'belezanaweb/card/PRODUCTS_ERROR'

const initialState = {
  products: {
    id: undefined,
    items: [],
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0
  },
  isFetching: false,
  error: undefined
}

export default function greeting (state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        isFetching: false
      }
    case PRODUCTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

const requestProducts = () => ({
  type: PRODUCTS_REQUEST
})

const saveProducts = products => ({
  type: PRODUCTS_SUCCESS,
  payload: { products }
})

const setProductsError = error => ({
  type: PRODUCTS_ERROR,
  payload: { error }
})

export const getProducts = () => async dispatch => {
  dispatch(requestProducts())

  try {
    const { data: response } = await api.get('/5b15c4923100004a006f3c07')
    dispatch(saveProducts(response))
  } catch (error) {
    const { message } = error
    dispatch(setProductsError(message))
  }
}
