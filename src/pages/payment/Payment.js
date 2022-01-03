import React from 'react'
import Box from '@mui/material/Box'
import Card from '../../components/card/Card'
import PurchaseSummary from '../../components/purchaseSummary/PurchaseSummary'
import BigButton from '../../components/bigButton/BigButton'
import CreditCardForm from '../../components/creditCardForm/CreditCardForm'
import store from '../../store'
import * as moment from 'moment'
import { useSelector } from 'react-redux'

function validateCvv(cvv) {
  return /^([0-9]){3}$/.test(cvv)
}

function validateName(name) {
  return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(name)
}

function validateCreditCard(creditCard) {
  return /^([0-9]){4}\.([0-9]){4}\.([0-9]){4}.([0-9]){4}$/.test(creditCard)
}

function validateDate(date) {
  return moment(date, 'MM/YYYY', true).isValid()
}

function validateFields(value) {
  return !(
    validateCvv(value?.cvv) &&
    validateName(value?.name) &&
    validateCreditCard(value?.creditCard) &&
    validateDate(value?.date)
  )
}

const Payment = () => {
  const shouldDisableButton = useSelector((state) => validateFields(state.paymentData))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card title="Cartão de crédito" content={<CreditCardForm />} />
      <PurchaseSummary price={store.getState().purchaseData} />
      <BigButton buttonText="Finalizar o pedido" disabled={shouldDisableButton} />
    </Box>
  )
}

export default Payment
