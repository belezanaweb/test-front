import React from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import NextStepButton from '../../components/NextStepButton/NextStepButton'
import { goToConfirmationPage } from '../../router/Coordinator'

const PaymentPage = () => {
  const history = useHistory()
  return (
    <div>
      <Header />
      PAGAMENTO
      <NextStepButton text="FINALIZAR O PEDIDO" onClick={() => goToConfirmationPage(history)} />
    </div>
  )
}

export default PaymentPage
