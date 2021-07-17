import { ACTIONS } from '../constants/actions'

const productsActions = {
  get: (products) => ({
    payload: products,
    type: ACTIONS.PRODUCTS_GET
  })
}

export { productsActions }
