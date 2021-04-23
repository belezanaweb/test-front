import React from 'react'
import { Container } from './style'
import { useRouteMatch } from 'react-router-dom'

const HeaderCheckout = () => {
  let { path } = useRouteMatch()
  return (
    <Container>
      <span className={path == '/checkout/cart' && 'current'}>Sacola</span>
      <span className={path == '/checkout/payment' && 'current'}>Pagamento</span>
      <span className={path == '/checkout/done' && 'current'}>Confirmação</span>
    </Container>
  )
}

export default HeaderCheckout
