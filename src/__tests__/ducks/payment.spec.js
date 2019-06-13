import payment, {Creators as PaymentActions} from '../../store/ducks/payment'

describe('Payment Duck', () => {
  const newPayment = {
    cardHolder: "Donald Martinez",
    cardNumber: "4764146564886488",
    cvv: "307",
    validity: "03/2023"
  }

  it('should be able to realize payment', () => {

    const state = payment({ data: {}}, PaymentActions.setPayment(newPayment));
    expect(state.data).toBe(newPayment)
  })

})
