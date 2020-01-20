import React, { useMemo } from 'react'
import { CartItemStyles } from './styles'

interface CartItemProps {
  data: CartItem
}

const CartItem: React.FC<CartItemProps> = ({ data: { product } }) => {
  const {
    name,
    priceSpecification: { price },
    imageObjects: images
  } = product

  const { small } = images[0]

  const formatedPrice: string = useMemo(() => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }, [price])

  return (
    <CartItemStyles>
      <img src={small} alt={name} />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <span className="product-price">{formatedPrice}</span>
      </div>
    </CartItemStyles>
  )
}

export default CartItem
