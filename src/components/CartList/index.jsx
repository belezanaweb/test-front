import React from 'react'

import { Container, Item, Image, Information, Title, Price } from './styles'

function CartList({ items }) {
  return (
    <Container>
      <ul>
        {items?.map(({ id, title, price, image }) => (
          <Item key={id}>
            <Image src={image} />
            <Information>
              <Title>{title}</Title>
              <Price>{price}</Price>
            </Information>
          </Item>
        ))}
      </ul>
    </Container>
  )
}

export default CartList
