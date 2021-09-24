import { Button, Container, Products, Summary } from 'components'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const Cart: FC<{ children?: never }> = () => {
  return (
    <Container>
      <Products />
      <div className="next">
        <Summary />
        <Button as={Link} to="/payment">
          Seguir para o pagamento
        </Button>
      </div>
    </Container>
  )
}

export default Cart
