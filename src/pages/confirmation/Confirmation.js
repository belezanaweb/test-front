import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '../../components/card/Card'
import PurchaseSummary from '../../components/purchaseSummary/PurchaseSummary'
import ConfirmationMessage from '../../components/confirmationMessage/ConfirmationMessage'
import PaymentData from '../../components/paymentData/PaymentData'
import CardListItem from '../../components/card/CardListItem'
import store from '../../store'

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
      <Card
        title="Produtos"
        content={
          <CardListItem items={store.getState().purchaseData.items} shouldShowPrice={false} />
        }
      />
      <PurchaseSummary price={store.getState().purchaseData} />
    </Box>
  )
}

export default Confirmation
