import { createSlice } from '@reduxjs/toolkit'

export const confirmReducer = createSlice({
  name: 'confirm',
  initialState: {
    isConfirmActive: false
  },
  reducers: {
    setIsConfirmActive: (state, action) => {
      state.isConfirmActive = action.payload
    }
  }
})

export const { setIsConfirmActive } = confirmReducer.actions

export default confirmReducer.reducer
