import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Button from '../../components/Button'
import CreditCardForm from '../../components/CreditCardForm'
import Informations from '../../components/Informations'
import { useCheckout } from '../../hooks/useCheckout'

function Payment() {
  const [creditCard, setCreditCard] = useState('')
  const [name, setName] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')

  const history = useHistory()

  const { data } = useCheckout()

  const { discount, shippingTotal, subTotal } = data

  const statusButton = () => {
    if (
      name.length === 0 ||
      expirationDate.length !== 7 ||
      creditCard.length !== 19 ||
      cvv.length !== 3
    ) {
      return true
    }

    return false
  }

  return (
    <main>
      <h5>Cartão de crédito</h5>
      <CreditCardForm
        creditCard={creditCard}
        setCreditCard={setCreditCard}
        name={name}
        setName={setName}
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        cvv={cvv}
        setCvv={setCvv}
      />
      <Informations discount={discount} shipping={shippingTotal} subtotal={subTotal} />
      <Button disabled={statusButton()} onClick={() => history.push('/success')}>
        Finalizar o pedido
      </Button>
    </main>
  )
}

export default Payment
