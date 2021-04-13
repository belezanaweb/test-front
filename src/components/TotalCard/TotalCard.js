import React from 'react'
import { Container, Description, DescriptionContainer, TotalContainer } from './styles'

const TotalCard = (props) => {
  return (
    <Container>
      <DescriptionContainer>
        <Description>PRODUTOS</Description>
        <Description>R$ {props.subTotal.toFixed(2).replace('.', ',')}</Description>
      </DescriptionContainer>
      <DescriptionContainer>
        <Description>FRETE</Description>
        <Description>R$ {props.shippingTotal.toFixed(2).replace('.', ',')}</Description>
      </DescriptionContainer>
      <DescriptionContainer>
        <Description style={{ color: '#FF7800' }}>DESCONTO</Description>
        <Description style={{ color: '#FF7800' }}>
          R$ {props.discount.toFixed(2).replace('.', ',')}
        </Description>
      </DescriptionContainer>
      <TotalContainer>
        <Description>
          <b>TOTAL</b>
        </Description>
        <Description>
          <b>R$ {props.total.toFixed(2).replace('.', ',')}</b>
        </Description>
      </TotalContainer>
    </Container>
  )
}

export default TotalCard
