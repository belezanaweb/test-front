import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '../../components/card/Card'
import PurchaseSummary from '../../components/purchaseSummary/PurchaseSummary'
import BigButton from '../../components/bigButton/BigButton'
import ConfirmationMessage from '../../components/confirmationMessage/ConfirmationMessage'
import PaymentData from '../../components/paymentData/PaymentData'

const Confirmation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ConfirmationMessage sucessMessage="Compra efetuada com sucesso" />
      <Card title="Pagamento" content={<PaymentData />} />
      <PurchaseSummary />
      <BigButton buttonText="Finalizar o pedido" />
    </Box>
  )
}

export default Confirmation
