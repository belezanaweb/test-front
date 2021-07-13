import React from 'react'
import './styles.css'

export default function CartItem({ name, src, price }) {
  return (
    <div className="cart-item">
      <img className="image" alt={name} src={src} />
      <div className="name-price">
        <span className="name">{name}</span>
        <span className="price">R$ {price.toFixed(2).replace('.', ',')}</span>
      </div>
    </div>
  )
}
