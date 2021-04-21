import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from './styles'

import { Button } from '../../components/Button'
import { BorderContainer } from '../../components/BorderContainer'
import { Card } from '../../components/Card'
import { Text } from '../../components/Text'
import { Header } from '../../components/Header'
import { ProductHeader } from '../../components/ProductHeader'
import { Creators as CartActions } from '../../store/ducks/cart'

export const Cart = () => {
  const dispatch = useDispatch()
  const { cartById } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(CartActions.getCartByIdRequest())
  }, [])

  return (
    <>
      <Header>
        <Text type="headerSeleted">SACOLA</Text>
        <Text type="headerDefault">PAGAMENTO</Text>
        <Text type="headerDefault">CONFIRMAÇÃO</Text>
      </Header>

      <Text type="cardTextLabel">PRODUTOS</Text>
      <Card margin="2%">
        <BorderContainer color="#EEE" />
      </Card>

      <BorderContainer color="#CCC">
        <ProductHeader>
          <Text type="cartPriceValue">PRODUTOS</Text>
          <Text type="cartPriceValue">R$ {cartById.subTotal}</Text>
        </ProductHeader>

        <ProductHeader>
          <Text type="cartPriceValue">FRETE</Text>
          <Text type="cartPriceValue">R$ {cartById.shippingTotal}</Text>
        </ProductHeader>

        <ProductHeader>
          <Text type="cartPriceDiscount">DESCONTO</Text>
          <Text type="cartPriceDiscount"> - R$ {cartById.discount}</Text>
        </ProductHeader>

        <ProductHeader>
          <Text type="cartPriceTotal">TOTAL</Text>
          <Text type="cartPriceTotal">R$ {cartById.total}</Text>
        </ProductHeader>
      </BorderContainer>

      <Container>
        <Button value="SEGUIR PARA O PAGAMENTO" />
      </Container>
    </>
  )
}
