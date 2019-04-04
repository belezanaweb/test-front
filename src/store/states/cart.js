/* global fetch */
import 'whatwg-fetch'

import currency from '../../utils/currency'

const PRODUCTS_REQUEST = 'belezanaweb/card/PRODUCTS_GET'
const PRODUCTS_SUCCESS = 'belezanaweb/card/PRODUCTS_SUCCESS'
const PRODUCTS_ERROR = 'belezanaweb/card/PRODUCTS_ERROR'

const initialState = {
  products: {
    items: [],
    summary: {
      subTotal: 0,
      shippingTotal: 0,
      discount: 0,
      total: 0
    }
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

export const getProducts = () => async dispatch => {
  dispatch(requestProducts())

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/5b15c4923100004a006f3c07`)
    const data = await response.json()

    console.log("DATA: ", data.items)

    const products = {
      items: data.items.map(item => ({
        sku: item.product.sku,
        quantity: item.quantity,
        name: item.product.name,
        price: currency.format(item.product.priceSpecification.price),
        image: item.product.imageObjects[0].medium
      })),
      summary: {
        subTotal: String(currency.format(data.subTotal)),
        shippingTotal: currency.format(data.shippingTotal),
        discount: currency.format(data.discount),
        total: currency.format(data.total)
      }
    }

    dispatch(saveProducts(products))
  } catch (error) {
    const { message } = error
    dispatch(setProductsError(message))
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