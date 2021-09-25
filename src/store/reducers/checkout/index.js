import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { cartList } from './checkoutAPI'

const initialState = {
  cart: null,
  status: 'idle'
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(cartListAsync())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const cartListAsync = createAsyncThunk('checkout/cartList', async (amount) => {
  // const response = await cartList(amount)
  // The value we return becomes the `fulfilled` action payload
  return {}
})

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(cartListAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(cartListAsync.fulfilled, (state, action) => {
        state.status = 'idle'
      })
  }
})

// export const { } = checkoutSlice.actions

export default checkoutSlice.reducer
