import React from 'react'
import { useHistory } from 'react-router'

import {
  goToShoppingCart,
  goToPaymentPage,
  goToPaymentConfirmation
} from '../../router/Coordinator'
import { StyledHeader, StyledOrangeText, StyledTextDisable } from './styled'

const Header = () => {
  const history = useHistory()

  return (
    <StyledHeader>
      {history.location.pathname === '/' || history.location.pathname === '/carrinho' ? (
        <StyledOrangeText onClick={() => goToShoppingCart(history)}>SACOLA</StyledOrangeText>
      ) : (
        <StyledTextDisable onClick={() => goToShoppingCart(history)}>SACOLA</StyledTextDisable>
      )}
      {history.location.pathname === '/pagamento' ? (
        <StyledOrangeText onClick={() => goToPaymentPage(history)}>PAGAMENTO</StyledOrangeText>
      ) : (
        <StyledTextDisable onClick={() => goToPaymentPage(history)}>PAGAMENTO</StyledTextDisable>
      )}
      {history.location.pathname === '/confirmacao-de-pagamento' ? (
        <StyledOrangeText onClick={() => goToPaymentConfirmation(history)}>
          CONFIRMAÇÃO
        </StyledOrangeText>
      ) : (
        <StyledTextDisable>CONFIRMAÇÃO</StyledTextDisable>
      )}
    </StyledHeader>
  )
}

export { Header }
