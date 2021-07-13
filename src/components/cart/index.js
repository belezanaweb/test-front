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
              src={item.product.imageObjects[0].medium}
              price={item.product.priceSpecification.price}
            />
          )
        })}
      </div>
    </div>
  )
}
