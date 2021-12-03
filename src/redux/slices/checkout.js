import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: false,
  products: [],
  info: {}
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload
      }
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload
      }
    },
    setProducts: (state, action) => {
      return {
        ...state,
        products: action.payload
      }
    },
    setInfo: (state, action) => {
      return {
        ...state,
        info: action.payload
      }
    }
  }
})

export const { setLoading, setError, setProducts, setInfo } = checkoutSlice.actions

export default checkoutSlice.reducer
