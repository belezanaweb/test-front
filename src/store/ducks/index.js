import { combineReducers } from 'redux'

import creditcard, { Creators as CreditCardActions, Types as CreditCardTypes } from './creditCard'

import products, { Creators as ProductsActions, Types as ProductsTypes } from './products'

const rootReducer = combineReducers({
  creditcard,
  products
})

export default rootReducer

export { CreditCardActions, ProductsActions }

export { CreditCardTypes, ProductsTypes }
