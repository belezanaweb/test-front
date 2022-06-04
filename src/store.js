import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducer/Cart'
import confirmReducer from './reducer/Confirm'
import paymentReducer from './reducer/Payment'

export default configureStore({
  reducer: {
    cart: cartReducer,
    confirm: confirmReducer,
    payment: paymentReducer
  }
})
