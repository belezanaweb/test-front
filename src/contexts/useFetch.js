import React, { useContext, createContext, useMemo, useState, useEffect, useCallback } from 'react'

const CreateFetchContext = createContext()

export function CreateFetchProvider({ children }) {
  const [products, setProducts] = useState([])
  const [summary, setSummary] = useState({})

  const getData = useCallback(async () => {
    const formatNumber = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    try {
      const response = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      const data = await response.json()
      const { items, discount, shippingTotal, subTotal, total } = data

      const productsFormated = items.map(({ product }) => ({
        id: product.sku,
        name: product.name,
        price: formatNumber.format(product.priceSpecification.price),
        image: product.imageObjects[0].medium
      }))

      const summaryFormated = {
        discount: formatNumber.format(discount),
        shippingTotal: formatNumber.format(shippingTotal),
        subTotal: formatNumber.format(subTotal),
        total: formatNumber.format(total)
      }

      setProducts(productsFormated)
      setSummary(summaryFormated)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const value = useMemo(() => ({ products, summary }), [products, summary])

  return <CreateFetchContext.Provider value={value}>{children}</CreateFetchContext.Provider>
}

export const useFetch = () => {
  const context = useContext(CreateFetchContext)

  return context
}
