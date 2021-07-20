import React from 'react'
import './cartList.css'
import { CartItem } from './cartItem'

const CartList = ({ items }) => {
  return (
    <div data-testid="cart-list" className="cart-list">
      {items.map((item) => {
        return (
          <CartItem
            key={item.product.sku}
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
