import { createSlice } from '@reduxjs/toolkit'

export const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    isCartActive: false
  },
  reducers: {
    setIsCartActive: (state, action) => {
      state.isCartActive = action.payload
    }
  }
})

export const { setIsCartActive } = cartReducer.actions

export default cartReducer.reducer
