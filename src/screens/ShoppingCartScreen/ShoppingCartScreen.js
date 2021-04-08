import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

const ShoppingCartScreen = () => {
  const { cart, getProducts } = useContext(GlobalStateContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      ShoppingCartScreen
      <button onClick={getProducts}></button>
    </div>
  )
}

export default ShoppingCartScreen
