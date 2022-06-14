import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import summaryReducer from './slices/summarySlice'

export default configureStore({
  reducer: {
    products: productsReducer,
    summary: summaryReducer
  }
})
