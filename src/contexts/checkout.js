import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getProducts } from 'services/cart'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [prices, setPrices] = useState({})
  const [step, setStep] = useState(0)

  useEffect(() => {
    const productsData = getProducts()
    productsData.then((data) => {
      const { shippingTotal, subTotal, total, discount } = data
      setPrices({ shippingTotal, subTotal, total, discount })
      setProducts(data.items)
      setIsLoading(false)
    })
  }, [])

  const store = {
    setStep,
    step,
    products,
    prices,
    isLoading
  }

  return <ProductsContext.Provider value={store}>{children}</ProductsContext.Provider>
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useProductsContext = () => {
  const context = useContext(ProductsContext)
  if (context === undefined) {
    throw new Error('useProductsContext must be used within a ProductsProvider')
  }
  return context
}
