export interface FormValues {
  creditCardNumber: string
  creditCardName: string
  creditCardExpiration: string
  creditCardCode: string
}

export interface CheckoutPaymentProps {
  onPaymentSuccess: () => void
}

export type ForwardRefProps = {
  submit: () => void
}
