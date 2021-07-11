import React, { useState, useContext } from 'react'
import { ReducerContext } from '../../reducer'
import { NavBar } from '../../components/NavBar'
import './Payment.css'
import { Input } from '../../components/Input'
import { Summary } from '../../components/Summary'
import { Button } from '../../components/Button'
import { validateCreditCard, validateCVV, validateExpiration, validateName } from './validations'

const Payment = (props) => {
  const { state, dispatch } = useContext(ReducerContext)

  const [form, setForm] = useState({
    creditCard: {
      value: '',
      hasError: false,
      errorMessage: ''
    },
    name: {
      value: '',
      hasError: false,
      errorMessage: ''
    },
    expiration: {
      value: '',
      hasError: false,
      errorMessage: ''
    },
    cvv: {
      value: '',
      hasError: false,
      errorMessage: ''
    }
  })

  const validate = (target) => {
    if (target.id === 'creditCard') return validateCreditCard(target.value)
    if (target.id === 'name') return validateName(target.value)
    if (target.id === 'expiration') return validateExpiration(target.value)
    if (target.id === 'cvv') return validateCVV(target.value)
  }

  const handleChange = (event) => {
    event.persist()

    let updatedForm = form
    updatedForm[event.target.id] = validate(event.target)

    setForm(updatedForm)
    console.log(updatedForm)
  }

  const submit = () => {
    if (
      form.creditCard.hasError ||
      form.name.hasError ||
      form.expiration.hasError ||
      form.cvv.hasError
    ) {
      window.alert('Your form contains erros. Please, correct them before continue.')
      return
    }

    const creditCard = {
      number: form.creditCard.value,
      name: form.name.value,
      expiration: form.expiration.value
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
              value={form.creditCard.value}
              error={form.creditCard.hasError}
              errorMessage={form.creditCard.errorMessage}
            />
            <Input
              id="name"
              label="Nome do Titular"
              type="text"
              onChange={handleChange}
              value={form.name.value}
              error={form.name.hasError}
              errorMessage={form.name.errorMessage}
            />
            <div className="form-line">
              <Input
                id="expiration"
                label="Validade (mês/ano)"
                type="text"
                onChange={handleChange}
                value={form.expiration.value}
                error={form.expiration.hasError}
                errorMessage={form.expiration.errorMessage}
              />
              <Input
                id="cvv"
                label="CVV"
                type="number"
                onChange={handleChange}
                value={form.cvv.value}
                error={form.cvv.hasError}
                errorMessage={form.cvv.errorMessage}
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
