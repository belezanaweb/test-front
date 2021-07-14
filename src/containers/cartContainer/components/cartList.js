import React from 'react'
import './cartList.css'
import { CartItem } from './cartItem'

const CartList = ({ items }) => {
  return (
    <div className="cart-list">
      {items.map((item, index) => {
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
  )
}

export { CartList }
