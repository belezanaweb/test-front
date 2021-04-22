import React from 'react'
import { Container } from './style'
import { useLocation } from 'react-router'

const HeaderCheckout = () => {
  //    const location = useLocation();

  return (
    <Container>
      <a href="">Sacola</a>
      <a href="">Pagamento</a>
      <a href="">Confirmação</a>
    </Container>
  )
}

export default HeaderCheckout
