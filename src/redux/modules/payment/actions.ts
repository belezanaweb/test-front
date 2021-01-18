import { Action } from 'redux-actions'

import { IPayment } from './types/IState'
import * as type from './actionTypes'

/**
 * Save card data
 * @returns Action
 * @param { IPayment } data
 */

export const save = (data: IPayment): Action<IPayment> => ({
  type: type.SAVE,
  payload: data
})
