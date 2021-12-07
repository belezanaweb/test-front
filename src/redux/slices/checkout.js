import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: false,
  products: [],
  info: {},
  card: {
    number: '',
    name: '',
    date: '',
    cvv: ''
  }
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
    },
    setCard: (state, action) => {
      return {
        ...state,
        card: action.payload
      }
    }
  }
})

export const { setLoading, setError, setProducts, setInfo, setCard } = checkoutSlice.actions

export default checkoutSlice.reducer
