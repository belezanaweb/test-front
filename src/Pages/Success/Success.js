import React from 'react'
import Products from '../../Components/Products/index'
import Total from '../../Components/Total/index'
import { Container, Title } from '../../globalstyles'
import { Paymentbox, Image } from './styles'
import imagesuccess from '../../Assets/success.png'

export default function Success() {
  return (
    <Container>
      <Image src={imagesuccess}></Image>
      <Title>PAGAMENTO</Title>
      <Paymentbox>
        <span>****.****.****.1234</span>
        <span>JOSÉ DA SILVA</span>
        <span>05/2019</span>
      </Paymentbox>
      <Title>Produtos</Title>
      <Products />
      <Total />
    </Container>
  )
}
