import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '../../components/card/Card'
import PurchaseSummary from '../../components/purchaseSummary/PurchaseSummary'
import BigButton from '../../components/bigButton/BigButton'
import CreditCardForm from '../../components/creditCardForm/CreditCardForm'

const Payment = () => {
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
      <PurchaseSummary />
      <BigButton buttonText="Finalizar o pedido" />
    </Box>
  )
}

export default Payment
