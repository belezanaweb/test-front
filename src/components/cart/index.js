import React, { useState } from 'react'
import axios from 'axios'

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
    <ul className="cart-list">
      {products.items.map((item) => {
        return (
          <li>
            <div>{item.product.name}</div>
            <img alt={item.product.name} src={item.product.imageObjects[0].medium} />
            <div>R${item.product.priceSpecification.price}</div>
          </li>
        )
      })}
    </ul>
  )
}
