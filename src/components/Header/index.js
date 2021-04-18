import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { StyledHeader, StyledOrangeText, StyledTextDisable } from './styles'

const Header = () => {
  const history = useHistory()

  return (
    <StyledHeader>
      {history.location.pathname === '/carrinho' ? (
        <StyledOrangeText>
          <Link to="{/carrinho}">SACOLA</Link>
        </StyledOrangeText>
      ) : (
        <StyledTextDisable>
          <Link to="{/carrinho}">SACOLA</Link>
        </StyledTextDisable>
      )}

      {history.location.pathname === '/pagamento' ? (
        <StyledOrangeText>
          <Link to="{/pagamento}">PAGAMENTO</Link>
        </StyledOrangeText>
      ) : (
        <StyledTextDisable>
          <Link to="{/pagamento}">PAGAMENTO</Link>
        </StyledTextDisable>
      )}

      {history.location.pathname === '/confirmacao-de-pagamento' ? (
        <StyledOrangeText>
          <Link to="{/confirmacao-de-pagamento}">CONFIRMAÇÃO</Link>
        </StyledOrangeText>
      ) : (
        <StyledTextDisable>
          <Link to="{/confirmacao-de-pagamento}">CONFIRMAÇÃO</Link>
        </StyledTextDisable>
      )}
    </StyledHeader>
  )
}

export { Header }
