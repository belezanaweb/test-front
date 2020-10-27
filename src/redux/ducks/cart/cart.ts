import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api, { CART_URL } from '../../../services'
import { ICart, ICartData } from './interface'

const initialState: ICart = {
  data: {
    discount: 0,
    id: '',
    items: [],
    shippingTotal: 0,
    subTotal: 0,
    total: 0
  },
  loading: 'idle',
  error: false
}

const fetchCartProducts = createAsyncThunk('cart/fetchProducts', async () => {
  const response = await api.get(CART_URL)
  return (await response.data) as ICartData
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartProducts.pending, (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.data = action.payload
      }
    })
    builder.addCase(fetchCartProducts.rejected, (state) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = true
      }
    })
  }
})

const { reducer } = cartSlice

export { fetchCartProducts, cartSlice }

export default reducer
