import React from 'react'
import { useHistory } from 'react-router'
import NextStepButton from '../../components/NextStepButton/NextStepButton'
import { goToConfirmationPage } from '../../router/Coordinator'

const PaymentPage = () => {
  const history = useHistory()
  return (
    <div>
      PAGAMENTO
      <NextStepButton text="FINALIZAR O PEDIDO" onClick={() => goToConfirmationPage(history)} />
    </div>
  )
}

export default PaymentPage
