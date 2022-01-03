import React from 'react'
import Box from '@mui/material/Box'
import store from '../../store'
import Card from '../../components/card/Card'
import CardListItem from '../../components/card/CardListItem'
import PurchaseSummary from '../../components/purchaseSummary/PurchaseSummary'
import BigButton from '../../components/bigButton/BigButton'

const Cart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card
        title="Produtos"
        content={<CardListItem items={store.getState().purchaseData.items} />}
      />
      <PurchaseSummary price={store.getState().purchaseData} />
      <BigButton buttonText="Seguir para o pagamento" />
    </Box>
  )
}

export default Cart
