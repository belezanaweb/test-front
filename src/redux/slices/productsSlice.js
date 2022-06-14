import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'products',
  initialState: {
    items: []
  },
  reducers: {
    loadProducts(state, { payload }) {
      return { ...state, items: payload }
    }
  }
})

export const { loadProducts } = slice.actions

export const getProducts = (state) => state.products

export default slice.reducer
