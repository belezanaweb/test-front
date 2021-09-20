import React from 'react'

import { ActiveTextStatusBar, StatusBar, TextStatusBar } from '../styles/StatusBar/StatusBar'
import { ButtonStyled } from '../styles/Products/Products'
import SubTotal from '../components/SubTotal/SubTotal'
import ProductItems from '../components/ProductItems/ProductItems'

export default function Cart({ nextStep, dataEndPoint }) {
  return (
    <>
      <StatusBar>
        <ActiveTextStatusBar>Sacola</ActiveTextStatusBar>
        <TextStatusBar>Pagamento</TextStatusBar>
        <TextStatusBar>Confirmação</TextStatusBar>
      </StatusBar>
      <ProductItems dataEndPoint={dataEndPoint} />
      <SubTotal dataEndPoint={dataEndPoint} />
      <ButtonStyled onClick={nextStep}>Seguir para o pagamento</ButtonStyled>
    </>
  )
}
