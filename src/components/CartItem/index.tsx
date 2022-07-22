import React from 'react'
import { Container, SectionContainer, Title } from './style'

export const CartItem = () => {
  return (
    <SectionContainer>
      <Title>Produtos</Title>
      <Container>
        {/* {!!chosenProducts?.length &&
          chosenProducts.map((product) => (
            <Product key={product.product.sku} {...product.product} />
          ))} */}
      </Container>
    </SectionContainer>
  )
}
