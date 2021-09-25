import { combineReducers } from '@reduxjs/toolkit'

import checkoutReducer from './reducers/checkout'

export const rootReducer = combineReducers({
  checkout: checkoutReducer
})
