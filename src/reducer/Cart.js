import { createSlice } from '@reduxjs/toolkit'

export const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    isCartActive: false,
    cartInfo: {
      id: null,
      discount: null,
      items: [
        {
          product: {
            sku: null,
            name: null
          },
          quantity: null
        }
      ]
    }
  },
  reducers: {
    setIsCartActive: (state, action) => {
      state.isCartActive = action.payload
    },
    setCartInfo: (state, action) => {
      state.cartInfo = action.payload
    }
  }
})

export const { setIsCartActive, setCartInfo } = cartReducer.actions

export default cartReducer.reducer
