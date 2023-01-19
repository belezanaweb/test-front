
import React, { useEffect } from 'react';
import { CreditCard } from '../types'
import { create } from 'zustand'

export type CreditCardResponse = {
    creditCard: CreditCard,
    setCreditCard: Function
}

export const useCreditCard = create<CreditCardResponse>((set, get) => ({
  creditCard: {
    name: "",
    number: "",
    date: "",
    cvv: ""
  },
  setCreditCard: (newCreditCard: CreditCard) => set(() => ({ creditCard: newCreditCard })),
}))
