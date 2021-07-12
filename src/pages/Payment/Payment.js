import React, { useState, useEffect, useContext } from 'react'
import { ReducerContext } from '../../reducer'
import { NavBar } from '../../components/NavBar'
import './Payment.css'
import { Input } from '../../components/Input'
import { Summary } from '../../components/Summary'
import { Button } from '../../components/Button'
import { validateCreditCard, validateCVV, validateExpiration, validateName } from './validations'

const Payment = (props) => {
  const { state, dispatch } = useContext(ReducerContext)

  useEffect(() => {
    if (state.shoppingCart.items.length === 0) {
      props.history.push('/')
    }
  })

  const [creditCardInput, setCreditCardInput] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })
  const [nameInput, setNameInput] = useState({ value: '', hasError: false, errorMessage: '' })
  const [expirationInput, setExpirationInput] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })
  const [cvvInput, setCvvInput] = useState({ value: '', hasError: false, errorMessage: '' })

  const handleChange = (event) => {
    event.persist()
    validate(event.target)
  }

  const validate = (target) => {
    if (target.id === 'creditCard') setCreditCardInput(validateCreditCard(target.value))
    if (target.id === 'name') setNameInput(validateName(target.value))
    if (target.id === 'expiration') setExpirationInput(validateExpiration(target.value))
    if (target.id === 'cvv') setCvvInput(validateCVV(target.value))
  }

  const submit = () => {
    if (
      creditCardInput.hasError ||
      nameInput.hasError ||
      expirationInput.hasError ||
      cvvInput.hasError
    ) {
      window.alert('Seu formulário contém erros. Por favor, corrija-os antes de continuar.')
      return
    }

    let maskedNumber = creditCardInput.value.replace(
      /(\d{4})?(\d{4})?(\d{4})?(\d{4})/,
      '$1.$2.$3.$4'
    )
    maskedNumber = maskedNumber.slice(0, 13).replace(/[0-9]/g, '*') + maskedNumber.slice(14, 19)

    const creditCard = {
      number: maskedNumber,
      name: nameInput.value,
      expiration: expirationInput.value
    }
    dispatch({ type: 'SET_CREDIT_CARD', payload: creditCard })
    props.history.push('/checkout')
  }

  return (
    <>
      <NavBar pathname={props.location.pathname} />
      <div className="page-container">
        <div className="title">
          <span>CARTÃO DE CRÉDITO</span>
        </div>
        <div className="responsive-container">
          <div className="form">
            <Input
              id="creditCard"
              label="Cartão de Crédito"
              type="number"
              onChange={handleChange}
              value={creditCardInput.value}
              error={creditCardInput.hasError}
              errorMessage={creditCardInput.errorMessage}
            />
            <Input
              id="name"
              label="Nome do Titular"
              type="text"
              onChange={handleChange}
              value={nameInput.value}
              error={nameInput.hasError}
              errorMessage={nameInput.errorMessage}
            />
            <div className="form-line">
              <Input
                id="expiration"
                label="Validade (MM/AA)"
                type="text"
                onChange={handleChange}
                value={expirationInput.value}
                error={expirationInput.hasError}
                errorMessage={expirationInput.errorMessage}
              />
              <Input
                id="cvv"
                label="CVV"
                type="number"
                onChange={handleChange}
                value={cvvInput.value}
                error={cvvInput.hasError}
                errorMessage={cvvInput.errorMessage}
              />
            </div>
          </div>
          <div className="summary">
            <Summary
              summary={{
                subTotal: state.shoppingCart.subTotal,
                shipping: state.shoppingCart.shippingTotal,
                discount: state.shoppingCart.discount,
                total: state.shoppingCart.total
              }}
            />
            <Button label="FINALIZAR O PEDIDO" onClick={submit} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
