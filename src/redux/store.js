import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import summaryReducer from './slices/summarySlice'
import paymentReducer from './slices/paymentSlice'

export default configureStore({
  reducer: {
    products: productsReducer,
    summary: summaryReducer,
    payment: paymentReducer
  }
})
