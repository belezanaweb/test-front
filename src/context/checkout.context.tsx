import React, { FC, useContext, createContext, useMemo } from 'react'
import { useOrders } from 'requests/get-orders.request'

interface IProduct {
  picture: string;
  title: string;
  price: number;
}

interface ICheckoutData {
  loading: boolean;
  products: IProduct[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

const CheckoutContext = createContext({} as ICheckoutData)

export const CheckoutProvider: FC = ({ children }) => {
  const { data, isValidating: loading } = useOrders()
  const products = useMemo(() => {
    return data?.items?.map(i => ({picture: i.product.imageObjects[0].medium, title: i.product.name, price: i.product.priceSpecification.price})) ?? []
  }, [data])

  return (
    <CheckoutContext.Provider
      value={{
        products,
        loading,
        subTotal: data?.subTotal ?? 0,
        shippingTotal: data?.shippingTotal ?? 0,
        discount: data?.discount ?? 0,
        total: data?.total ?? 0
      }}>
        {children}
    </CheckoutContext.Provider>
  )

}

export const useCheckoutContext = (): ICheckoutData => {
  const ctx = useContext(CheckoutContext)
  
  if (!Object.entries(ctx).length) {
    throw new Error(
      'useCheckoutContext must be used within a CheckoutContext Provider'
    )
  }

  return ctx
}
