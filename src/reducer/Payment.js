import { createSlice } from '@reduxjs/toolkit'

export const paymentReducer = createSlice({
  name: 'payment',
  initialState: {
    isPaymentActive: false
  },
  reducers: {
    setIsPaymentActive: (state, action) => {
      state.isPaymentActive = action.payload
    }
  }
})

export const { setIsPaymentActive } = paymentReducer.actions

export default paymentReducer.reducer
