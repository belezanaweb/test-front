import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Form } from '@unform/web'
import history from '../../services/history'
import { Button } from '../../components/Button'
import { BorderContainer } from '../../components/BorderContainer'
import { Card } from '../../components/Card'
import { Text } from '../../components/Text'
import { ProductHeader } from '../../components/ProductHeader'

import { Container, ContainerWrapper, InputWrapper } from './styles'
import { Input } from '../../components/Input'
import { GridContainer } from '../../components/GridContainer'

export const Payment = () => {
  const { cartById } = useSelector((state) => state.cart)

  useEffect(() => {
    console.log('cartById => ', cartById)
    if (Object.values(cartById).length === 0) history.push('/cart')
  }, [cartById])

  const handleSubmit = (data) => {
    console.log('data: ', data)
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Text type="cardTextLabel">CARTÃO DE CRÉDITO</Text>
        <Card margin="2%" padding="3%">
          <Text type="inputLabel">Número do Cartão: </Text>
          <Input name="creditCard" placeholder="_____.____.____.____" />

          <Text type="inputLabel">Nome do Titular: </Text>
          <Input name="ownerName" placeholder="Como no cartão" />

          <GridContainer columns="60% 40%">
            <InputWrapper>
              <Text type="inputLabel">Validade (mês/ano)</Text>
              <Input name="valid" placeholder="__/____" />
            </InputWrapper>
            <InputWrapper>
              <Text type="inputLabel">Validade (mês/ano)</Text>
              <Input name="creditCard" placeholder="__/____" width="100%" />
            </InputWrapper>
          </GridContainer>
        </Card>
      </Form>
      <ContainerWrapper>
        <BorderContainer color="#CCC">
          <ProductHeader>
            <Text type="cartPriceValue">PRODUTOS</Text>
            <Text type="cartPriceValue">
              R$ {cartById.subTotal && cartById.subTotal.toFixed(2).toString().replace('.', ',')}
            </Text>
          </ProductHeader>

          <ProductHeader>
            <Text type="cartPriceValue">FRETE</Text>
            <Text type="cartPriceValue">
              R${' '}
              {cartById.shippingTotal &&
                cartById.shippingTotal.toFixed(2).toString().replace('.', ',')}
            </Text>
          </ProductHeader>

          <ProductHeader>
            <Text type="cartPriceDiscount">DESCONTO</Text>
            <Text type="cartPriceDiscount">
              {' '}
              - R$ {cartById.discount && cartById.discount.toFixed(2).toString().replace('.', ',')}
            </Text>
          </ProductHeader>

          <ProductHeader>
            <Text type="cartPriceTotal">TOTAL</Text>
            <Text type="cartPriceTotal">
              R$ {cartById.total && cartById.total.toFixed(2).toString().replace('.', ',')}
            </Text>
          </ProductHeader>
        </BorderContainer>

        <Button value="SEGUIR PARA O PAGAMENTO" />
      </ContainerWrapper>
    </Container>
  )
}
