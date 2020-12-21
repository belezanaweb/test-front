import { combineReducers } from 'redux'
import mask from '../utils/maskCreditCardNumber'

const name = 'CARD'

export const initialState = {
  isLoading: false,
  data: {}
}

export const types = {
  REQUEST: `REQUEST_${name}`,
  SAVE: `SAVE_${name}`
}

const data = (state = initialState.data, { type, payload }) =>
  type !== types.SAVE ? state : { ...payload, cardNumber: mask(payload.cardNumber) }

const isLoading = (state = initialState.isLoading, { type }) => {
  const mapping = {
    [types.SAVE]: false,
    [types.REQUEST]: true
  }

  return Object.prototype.hasOwnProperty.call(mapping, type) ? mapping[type] : state
}

export const onSave = (payload) => ({
  type: types.SAVE,
  payload
})

export const request = () => ({
  type: types.REQUEST
})

export const save = (data) => (dispatch) => {
  dispatch(request())
  dispatch(onSave(data))
}

export default combineReducers({ data, isLoading })
