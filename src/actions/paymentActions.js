import { SET_PAYMENT_INFOS } from './types'

export const setPaymentInfos = (payload) => async (dispatch) => {
  dispatch({
    type: SET_PAYMENT_INFOS,
    payload
  })
}
