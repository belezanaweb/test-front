import React from 'react'
import { Button, Container } from './style'

const ButtonCheckout = ({ children, ...rest }) => {
  return (
    <Container>
      <Button {...rest}>{children}</Button>
    </Container>
  )
}

export default ButtonCheckout
