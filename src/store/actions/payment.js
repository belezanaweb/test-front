export function addPayment(
  creditCardNumber,
  creditCardHolder,
  creditCardExpDate,
) {
  return {
    type: ActionTypeEnum.ADD_PAYMENT,
    data: {
      creditCardNumber,
      creditCardHolder,
      creditCardExpDate,
    },
  }
}

export const ActionTypeEnum = {
  ADD_PAYMENT: 'ADD_PAYMENT',
}
