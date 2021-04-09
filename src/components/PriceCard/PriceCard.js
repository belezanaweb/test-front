import React from 'react'
import { BoldTitle, GreyTitle, OrangeTitle, PriceContainer } from './styles'

const PriceCard = ({ subTotal, shipping, discount }) => {
  const total = (subTotal + shipping - discount).toFixed(2)

  return (
    <PriceContainer>
      <div>
        <GreyTitle>PRODUTOS</GreyTitle>
        <GreyTitle>FRETE</GreyTitle>
        <OrangeTitle>DESCONTO</OrangeTitle>
        <BoldTitle>TOTAL</BoldTitle>
      </div>
      <div>
        <GreyTitle>R$ {subTotal}</GreyTitle>
        <GreyTitle>R$ {shipping}</GreyTitle>
        <OrangeTitle>R$ {discount}</OrangeTitle>
        <BoldTitle>R$ {total}</BoldTitle>
      </div>
    </PriceContainer>
  )
}

export default PriceCard
