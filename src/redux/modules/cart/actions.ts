import { Action, BaseAction } from 'redux-actions'

import { ICart } from './types/IState'
import * as type from './actionTypes'

/**
 * Get cart data. This action will be intercepted by your saga.
 * @returns Action
 */

export const getProducts = (): BaseAction => ({
  type: type.GET_PRODUCTS
})

/**
 * Save card data
 * @returns Action
 * @param { ICart } data
 */

export const save = (data: ICart): Action<ICart> => ({
  type: type.SAVE,
  payload: data
})
