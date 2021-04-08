import React from 'react'
import { useHistory } from 'react-router'
import { goToConfirmation, goToPayment, goToShoppingCart } from '../../router/coordinator'
import { HeaderContainer, SectionGrey, SectionOrange } from './styles'

const Header = (props) => {
  const history = useHistory()

  return (
    <HeaderContainer>
      {props.changeCart ? (
        <SectionOrange onClick={() => goToShoppingCart(history)}>SACOLA</SectionOrange>
      ) : (
        <SectionGrey onClick={() => goToShoppingCart(history)}>SACOLA</SectionGrey>
      )}
      {props.changePayment ? (
        <SectionOrange onClick={() => goToPayment(history)}>PAGAMENTO</SectionOrange>
      ) : (
        <SectionGrey onClick={() => goToPayment(history)}>PAGAMENTO</SectionGrey>
      )}
      {props.changeConfirm ? (
        <SectionOrange onClick={() => goToConfirmation(history)}>CONFIRMAÇÃO</SectionOrange>
      ) : (
        <SectionGrey onClick={() => goToConfirmation(history)}>CONFIRMAÇÃO</SectionGrey>
      )}
    </HeaderContainer>
  )
}

export default Header
