import React from 'react'
import './cartItem.css'

const CartItem = ({ name, src, price }) => (
  <div className="cart-item">
    <img className="image" alt={name} src={src} />
    <div className="name-price">
      <span className="name">{name}</span>
      <span className="price">R$ {price.toFixed(2).replace('.', ',')}</span>
    </div>
  </div>
)

export { CartItem }
