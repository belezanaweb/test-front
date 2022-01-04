import React from 'react'
import Box from '@mui/material/Box'
import store from '../../store'
import Card from '../../components/card/Card'
import CardListItem from '../../components/card/CardListItem'
import PurchaseSummary from '../../components/purchaseSummary/PurchaseSummary'
import BigButton from '../../components/bigButton/BigButton'

function goToPayment() {
  store.dispatch({ type: 'setTabs', field: 'disabledTab1', value: false })
  store.dispatch({ type: 'setTabs', field: 'currentTab', value: 1 })
}

const Bag = () => {
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
      <BigButton buttonText="Seguir para o pagamento" handleClick={goToPayment} />
    </Box>
  )
}

export default Bag
