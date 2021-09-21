import { Button, Products, Summary, Title } from 'components'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const Cart: FC<{ children?: never }> = () => {
  return (
    <>
      <Title>Produtos</Title>
      <Products />
      <Summary />
      <Button as={Link} to="/payment">
        Seguir para o pagamento
      </Button>
    </>
  )
}
