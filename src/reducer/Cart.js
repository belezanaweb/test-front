import { createSlice } from '@reduxjs/toolkit'

export const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    total: 0
  },
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload
    }
  }
})

export const { setTotal } = cartReducer.actions

export default cartReducer.reducer
