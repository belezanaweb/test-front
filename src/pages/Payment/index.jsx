import React from 'react'
import { useCheckoutContext } from '../../contexts/Checkout'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import Inputs from '../../components/Inputs'

const PaymentPage = () => {
  const { isLoading } = useCheckoutContext()

  const creditCardData = {
    cardNumber: {
      placeholder: '____.____.____.____',
      mask: '9999.9999.9999.9999',
      label: 'Número do cartão:'
    },
    cardName: {
      placeholder: 'Como no cartão',
      label: 'Nome do Titular:'
    },
    cardDate: {
      placeholder: '__/____',
      mask: '99/9999',
      label: 'Validade (mês/ano):'
    },
    cardCvv: {
      placeholder: '___',
      mask: '999',
      label: 'CVV:'
    },
    containerCreditTitle: 'Cartão de crédito',
    buttonText: 'Finalizar o pedido'
  }

  return (
    <>
      {isLoading}
      <Navbar step={1} />
      {!isLoading && (
        <div>
          <>
            <div>
              <Inputs />
              <Inputs />
              <Inputs />
              <Inputs />
            </div>

            <Button
              text={creditCardData.buttonText}
              step="2"
              path="/success"
              disabled={!isValidated}
            />
          </>
        </div>
      )}
    </>
  )
}

export default PaymentPage
