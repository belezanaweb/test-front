import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './ducks/cart'
import creditCardReducer from './ducks/creditCard'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    creditCard: creditCardReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
