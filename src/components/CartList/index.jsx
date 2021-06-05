import React from 'react'

import { toCurrency } from '../../utils/currency'
import { Container, Item, Image, Information, Title, Price } from './styles'

function CartList({ cartItems, isLoading }) {
  return (
    <Container>
      {isLoading ? (
        <h3>Carregando...</h3>
      ) : (
        <ul>
          {cartItems?.map(({ product: { sku, name, imageObjects, priceSpecification } }) => (
            <Item key={sku}>
              <Image src={imageObjects && imageObjects[0].small} />
              <Information>
                <Title>{name}</Title>
                <Price>{toCurrency(priceSpecification.price)}</Price>
              </Information>
            </Item>
          ))}
        </ul>
      )}
    </Container>
  )
}

export default CartList
