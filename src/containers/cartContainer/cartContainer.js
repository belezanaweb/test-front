import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CartList } from './components/cartList'
import './cartContainer.css'

const Cart = () => {
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
      <span className="cart-title">PRODUTOS</span>
      <CartList items={products.items} />
      <div className="summary">
        <div className="row">
          <span>PRODUTOS</span>
          <span className="value">R$ {products.subTotal}</span>
        </div>
        <div className="row">
          <span>FRETE</span>
          <span className="value">R$ {products.shippingTotal}</span>
        </div>
        <div className="row discount">
          <span>DESCONTO</span>
          <span className="value">R$ {products.discount}</span>
        </div>
        <div className="row total">
          <span>TOTAL</span>
          <span className="value">R$ {products.total}</span>
        </div>
      </div>
      <button className="btnProceed">SEGUIR PARA O PAGAMENTO</button>
    </div>
  )
}

export { Cart }
