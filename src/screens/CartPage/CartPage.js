import React from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import NextStepButton from '../../components/NextStepButton/NextStepButton'
import { goToPaymentPage } from '../../router/Coordinator'

const CartPage = () => {
  const history = useHistory()

  return (
    <div>
      <Header />
      SACOLA
      <NextStepButton text="SEGUIR PARA O PAGAMENTO" onClick={() => goToPaymentPage(history)} />
    </div>
  )
}

export default CartPage
