import { Dispatch } from 'redux'
import { IPayment } from '../../model/payment'

type PaymentAction = {
  type: 'SAVE_PAYMENT'
  payment: IPayment
}

export interface IPaymentValues {
  payment?: IPayment
}
export const paymentReducer = (
  state: IPaymentValues = {},
  action: PaymentAction
): IPaymentValues => {
  switch (action.type) {
    case 'SAVE_PAYMENT': {
      return { ...state, payment: action.payment }
    }
    default:
      return { ...state }
  }
}

export const savePayment = (data: IPayment) => (dispatch: Dispatch<PaymentAction>): void => {
  dispatch({
    type: 'SAVE_PAYMENT',
    payment: data
  })
}
