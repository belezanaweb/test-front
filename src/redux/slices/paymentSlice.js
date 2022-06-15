import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'payment',
  initialState: {
    cardNumber: '',
    name: '',
    expiryDate: '',
    cvv: ''
  },
  reducers: {
    handlePayment(state, { payload }) {
      return { ...state, ...payload }
    }
  }
})

export const { handlePayment } = slice.actions

export const getPaymentInformation = (state) => state.payment

export default slice.reducer
