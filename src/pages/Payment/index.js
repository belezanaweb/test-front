/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'

//context
import { useCart } from '../../context/useCart'

//formats
import { validCurrentDate, validDate } from '../../utils/formats'

//components
import Title from '../../components/Title'
import CardTotal from '../../components/CardTotal'
import Form from '../../components/Form'
import Button from '../../components/Button'

const Payment = () => {
  const [creditCard, setCreditCard] = useState('')
  const [name, setName] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')

  const history = useHistory()

  const { data, savePaymentData } = useCart()

  const { discount, shippingTotal, subTotal } = data

  // The button will only be activated if all the information entered is correct.
  const statusButton = () => {
    if (
      name.length === 0 ||
      expirationDate.length !== 7 ||
      !validCurrentDate(expirationDate) ||
      !validDate(expirationDate) ||
      creditCard.length !== 19 ||
      cvv.length !== 3
    ) {
      return true
    }

    return false
  }

  //Saving all data entered for payment
  const finalizeOrder = useCallback(() => {
    savePaymentData(
      name,
      expirationDate,
      creditCard.replace(/\b(?:\d{4}[ .]?){3}(?=\d{4}\b)/gm, '****.****.****.')
    )
    history.push('/success')
  }, [])

  return (
    <div className="div-container">
      <Title type="title">Cartão de crédito</Title>
      <Form
        creditCard={creditCard}
        setCreditCard={setCreditCard}
        name={name}
        setName={setName}
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        cvv={cvv}
        setCvv={setCvv}
      />
      <CardTotal discount={discount} shipping={shippingTotal} subtotal={subTotal} />
      <Button disabled={statusButton()} onClick={finalizeOrder}>
        Finalizar o pedido
      </Button>
    </div>
  )
}

export default Payment
