import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CheckoutContext = createContext()

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext)
  if (context === undefined) {
    throw new Error('useCheckoutContext must be used with a CheckoutProvider')
  }
  return context
}

export const api = axios.create({
  baseURL: 'https://www.mocky.io/v2/'
})

export const fetchProducts = async (id) => {
  try {
    const { data } = await api.get(id)
    return data
  } catch (err) {
    return err
  }
}

export const CheckoutProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [prices, setPrices] = useState({})
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    cardDate: '',
    cardCvv: ''
  })

  useEffect(() => {
    const productsData = fetchProducts('5b15c4923100004a006f3c07')
    productsData
      .then((data) => {
        const { subTotal, shippingTotal, discount, total } = data
        setPrices({ subTotal, shippingTotal, discount, total })
        setProducts(data.items)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  const store = {
    isLoading,
    products,
    prices,
    isConfirmed,
    setIsConfirmed,
    paymentData,
    setPaymentData
  }

  return <CheckoutContext.Provider value={store}>{children}</CheckoutContext.Provider>
}
