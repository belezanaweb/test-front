import React from 'react'
import { useHistory } from 'react-router'
import { goToCart, goToConfirmation, goToPayment } from '../../routers/Coordinator'
import { GreyText, HeaderContainer, OrangeText } from './styled'

const Header = () => {
  const history = useHistory()

  return (
    <HeaderContainer>
      {history.location.pathname === '/cart' ? (
        <OrangeText onClick={() => goToCart(history)}>SACOLA</OrangeText>
      ) : (
        <GreyText onClick={() => goToCart(history)}>SACOLA</GreyText>
      )}

      {history.location.pathname === '/payment' ? (
        <OrangeText onClick={() => goToPayment(history)}>PAGAMENTO</OrangeText>
      ) : (
        <GreyText onClick={() => goToPayment(history)}>PAGAMENTO</GreyText>
      )}

      {history.location.pathname === '/confirmation' ? (
        <OrangeText onClick={() => goToConfirmation(history)}>CONFIRMAÇÃO</OrangeText>
      ) : (
        <GreyText onClick={() => goToConfirmation(history)}>CONFIRMAÇÃO</GreyText>
      )}
    </HeaderContainer>
  )
}

export default Header
