import React from 'react'

import { Container } from './styles'
import CartItem from './CartItem'

function Items({ items = [] }) {
  return (
    <Container>
      {items.map((item) => {
        return <CartItem item={item} />
      })}
    </Container>
  )
}

export default Items
