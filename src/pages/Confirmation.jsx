import React from 'react'

import { formatDateBrazil } from '../utils'
import ProductItems from '../components/ProductItems/ProductItems'
import SubTotal from '../components/SubTotal/SubTotal'

import logo from '../assets/logoSuccess.png'

import {
  CardShowInfoCreditCard,
  InsideShowInfoCreditCard,
  ImageSuccess,
  SuccessInfo,
  TextSuccess,
  TextInfoCard
} from '../styles/Confirmation/Confirmation'
import { ActiveTextStatusBar, StatusBar, TextStatusBar } from '../styles/StatusBar/StatusBar'
import { TitleCartStyled } from '../styles/Payment/PaymentsItens'

export default function Confirmation({ sendDatas, dataEndPoint }) {
  return (
    <>
      <StatusBar>
        <TextStatusBar>Sacola</TextStatusBar>
        <TextStatusBar>Pagamento</TextStatusBar>
        <ActiveTextStatusBar>Confirmação</ActiveTextStatusBar>
      </StatusBar>
      <SuccessInfo>
        <ImageSuccess>
          <img alt="sucesso compra concluída" height="48px" src={logo} />
        </ImageSuccess>
        <TextSuccess>Compra efetuada com sucesso</TextSuccess>
      </SuccessInfo>
      <TitleCartStyled>Pagamento</TitleCartStyled>
      <CardShowInfoCreditCard>
        <InsideShowInfoCreditCard>
          <TextInfoCard>{`****.****.****.${sendDatas.cardNumber.slice(12)}`}</TextInfoCard>
          <TextInfoCard>{sendDatas.name}</TextInfoCard>
          <TextInfoCard>{formatDateBrazil(sendDatas.validity)}</TextInfoCard>
        </InsideShowInfoCreditCard>
      </CardShowInfoCreditCard>
      <ProductItems dataEndPoint={dataEndPoint} />
      <SubTotal dataEndPoint={dataEndPoint} />
    </>
  )
}
