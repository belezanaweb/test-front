import React from 'react'
import { PriceContainer, TextBlack, TextDiscount, TextTotal } from './styled'

function PriceCard(props) {
  return (
    <PriceContainer>
      <div>
        <TextBlack>PRODUTOS</TextBlack>
        <TextBlack>FRETE</TextBlack>
        <TextDiscount>DESCONTO</TextDiscount>
        <TextTotal>TOTAL</TextTotal>
      </div>
      <div>
        <TextBlack>R$ {props.subTotal}</TextBlack>
        <TextBlack>R$ {props.shippingTotal}</TextBlack>
        <TextDiscount>- R$ {props.discount}</TextDiscount>
        <TextTotal>R$ {props.total}</TextTotal>
      </div>
    </PriceContainer>
  )
}

export default PriceCard
