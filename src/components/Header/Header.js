import React from 'react'
import { useHistory } from 'react-router'
import { goToCartPage, goToConfirmationPage, goToPaymentPage } from '../../router/Coordinator'
import { Tab, TabContainer } from './styles'

const Header = () => {
  const history = useHistory()

  return (
    <TabContainer>
      {history.location.pathname === '/' || history.location.pathname === '/cart' ? (
        <Tab style={{ color: '#FF7800' }} onClick={() => goToCartPage(history)}>
          SACOLA
        </Tab>
      ) : (
        <Tab onClick={() => goToCartPage(history)}>SACOLA</Tab>
      )}
      {history.location.pathname === '/payment' ? (
        <Tab style={{ color: '#FF7800' }} onClick={() => goToPaymentPage(history)}>
          PAGAMENTO
        </Tab>
      ) : (
        <Tab onClick={() => goToPaymentPage(history)}>PAGAMENTO</Tab>
      )}
      {history.location.pathname === '/confirmation' ? (
        <Tab style={{ color: '#FF7800' }} onClick={() => goToConfirmationPage(history)}>
          CONFIRMAÇÃO
        </Tab>
      ) : (
        <Tab onClick={() => goToConfirmationPage(history)}>CONFIRMAÇÃO</Tab>
      )}
    </TabContainer>
  )
}

export default Header
