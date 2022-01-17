import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FormContext } from '../../components/Context/FormContext'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import { createUseStyles } from 'react-jss'
import CreditCardForm from '../../components/CreditCardForm/CreditCardForm'
import HeaderText from '../../components/HeaderText/HeaderText'

const useStyles = createUseStyles({
  payment: {
    width: '100%'
  }
})

const Payment = () => {
  const history = useHistory()
  const classes = useStyles()
  const formContext = useContext(FormContext)

  const handleClick = () => {
    history.push('/confirmation')
  }

  return (
    <div className={classes.payment} data-testid="Payment">
      <HeaderText>Cartão de Crédito</HeaderText>
      <Card>
        <CreditCardForm></CreditCardForm>
      </Card>
      <OrderSummary />
      <Button text="Finalizar o pedido" disabled={!formContext.isFormValid} click={handleClick} />
    </div>
  )
}

export default Payment
