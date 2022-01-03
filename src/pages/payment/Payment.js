import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '../../components/card/Card'
import PurchaseSummary from '../../components/purchaseSummary/PurchaseSummary'
import BigButton from '../../components/bigButton/BigButton'
import CreditCardForm from '../../components/creditCardForm/CreditCardForm'
import store from '../../store'
import * as moment from 'moment'

function validateCvv() {
  return /^([0-9]){3}$/.test(store.getState().paymentData.cvv)
}

function validateName() {
  return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(store.getState().paymentData.name)
}

function validateCreditCard() {
  return /^([0-9]){4}\.([0-9]){4}\.([0-9]){4}.([0-9]){4}$/.test(
    store.getState().paymentData.creditCard
  )
}

function validateDate() {
  return moment(store.getState().paymentData.date, 'MM/YYYY', true).isValid()
}

const Payment = () => {
  const shouldDisableButton = true

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
