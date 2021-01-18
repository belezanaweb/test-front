import { handleActions, Action } from 'redux-actions'

import * as type from './actionTypes'
import { IPayment } from './types/IState'

export const initialState: IPayment = {
  holder: '',
  number: 0,
  expirationDate: '',
  cvv: 0
}

const reducer = {
  [type.SAVE]: (state: IPayment, action: Action<IPayment>) => ({
    ...state,
    ...action.payload
  })
}

export default handleActions < IPayment > (reducer, initialState)
