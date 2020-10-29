import { createSlice } from '@reduxjs/toolkit'

import { ICreditCard } from './interface'

const initialState: ICreditCard = {
  holder: '',
  number: 0,
  expirationDate: '',
  cvv: 0
}

const creditCardSlice = createSlice({
  name: 'creditCard',
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})

const { actions, reducer } = creditCardSlice

export const { setData } = actions

export default reducer
