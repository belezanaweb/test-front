import actionsTypes from '../../actionTypes/payment'

export function handlPaymentInfo(paymentInfo) {
  return {
    type: actionsTypes.HANDLEPAYMENTINFO,
    paymentInfo
  }
}
