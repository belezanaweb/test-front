import React, { useState } from 'react'
import axios from 'axios'
import CartItem from '../cartItem/index'
import './styles.css'

export default function Cart() {
  const [products, setProducts] = useState('')
  const [isLoading, setLoading] = useState(true)
  function getProducts() {
    axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((res) => {
      setProducts(res.data)
      setLoading(false)
    })
  }
  getProducts()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="cart">
      <span className="cart-title">PRODUTOS</span>
      <div className="cart-list">
        {products.items.map((item, index) => {
          return (
            <CartItem
              key={index}
              name={item.product.name}
              src={item.product.imageObjects[0].small}
              price={item.product.priceSpecification.price}
            />
          )
        })}
      </div>
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
    </div>
  )
}
