import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducer/Cart'

export default configureStore({
  reducer: {
    cart: cartReducer
  }
})
