import { configureStore } from '@reduxjs/toolkit'
import checkout from './slices/checkout'

export const store = configureStore({
  reducer: {
    checkout
  }
})
