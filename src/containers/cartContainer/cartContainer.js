import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CartList } from './components/cartList'
import { Title } from '../../commons/title'
import { PriceSummary } from '../../commons/priceSummary'
import { Button } from '../../commons/button'
import './cartContainer.css'

const CartContainer = () => {
  const [products, setProducts] = useState('')
  const [isLoading, setLoading] = useState(true)
  function getProducts() {
    axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((res) => {
      setProducts(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="cart">
      <Title text="PRODUTOS" />
      <CartList items={products.items} />
      <PriceSummary
        subTotal={products.subTotal}
        shippingTotal={products.shippingTotal}
        discount={products.discount}
        total={products.total}
      />
      <Button text="SEGUIR PARA O PAGAMENTO" />
    </div>
  )
}

export { CartContainer }
