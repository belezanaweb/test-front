import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'summary',
  initialState: {
    subTotal: 0,
    discount: 0,
    shippingCost: 0,
    total: 0
  },
  reducers: {
    loadSummaryInfo(state, { payload }) {
      return { ...state, ...payload }
    }
  }
})

export const { loadSummaryInfo } = slice.actions

export const getSummaryInfo = (state) => state.summary

export default slice.reducer
