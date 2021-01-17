// TODO: Analisar utilização do @types/redux-actions
// afim de enformar validação de TS
import { handleActions, Action } from 'redux-actions'

import * as type from './actionTypes'
import { ICart } from './types/IState'

export const initialState: ICart = {
  id: '',
  items: [],
  subTotal: 0,
  shippingTotal: 0,
  discount: 0,
  total: 0
}

const reducer = {
  [type.SAVE]: (state: ICart, action: Action<ICart>) => ({
    ...state,
    ...action.payload
  })
}

export default handleActions < ICart > (reducer, initialState)
