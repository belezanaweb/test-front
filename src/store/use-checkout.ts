import { create } from 'zustand'

import { PaymentFormProps } from '@/routes/payment'

type CheckoutStore = {
  cartId: string
  setCartId: (cartId: string) => void
  setPaymentData: (data: PaymentFormProps) => void
  clearPaymentData: () => void
} & PaymentFormProps

const defaultValues = {
  cartId: '',
  cartNumber: '',
  cartOwnerName: '',
  cartExpirationDate: '',
  cartCVV: ''
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  ...defaultValues,
  setCartId: (cartId) => set({ cartId }),
  setPaymentData: (data) => set({ ...data }),
  clearPaymentData: () => set(defaultValues)
}))
