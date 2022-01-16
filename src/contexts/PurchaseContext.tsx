import React, { createContext, PropsWithChildren, useMemo, useState } from 'react'

import PaymentInfo from '../types/PaymentInfo'
import Product from '../types/Product'

interface PurchaseContextInterface {
  products: Product[],
  subTotal?: number,
  shipingTotal?: number,
  discount?: number,
  total?: number,
  paymentInfo?: PaymentInfo,
  setProducts: (products: Product[]) => void,
  setSubTotal: (subTotal: number) => void,
  setShipingTotal: (shipingTotal: number) => void,
  setDiscount: (discount: number) => void,
  setTotal: (total: number) => void,
  setPaymentInfo: (data: PaymentInfo) => void
}

export const PurchaseContext = createContext<PurchaseContextInterface>({} as PurchaseContextInterface)

export default function PurchaseContextProvider({children}: PropsWithChildren<{}>) {
  const [products, setProducts] = useState<Product[]>([])
  const [subTotal, setSubTotal] = useState<number | undefined>()
  const [shipingTotal, setShipingTotal] = useState<number | undefined>()
  const [discount, setDiscount] = useState<number | undefined>()
  const [total, setTotal] = useState<number | undefined>()
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>()

  const state = useMemo<PurchaseContextInterface>(() => ({
    products,
    subTotal,
    shipingTotal,
    discount,
    total,
    paymentInfo,
    setProducts,
    setSubTotal,
    setShipingTotal,
    setDiscount,
    setTotal,
    setPaymentInfo
  }), [
    products,
    subTotal,
    shipingTotal,
    discount,
    total,
    paymentInfo,
    setProducts,
    setSubTotal,
    setShipingTotal,
    setDiscount,
    setTotal,
    setPaymentInfo
  ])

  return <PurchaseContext.Provider value={state}>
    {children}
  </PurchaseContext.Provider>
}
