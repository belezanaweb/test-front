import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import history from '../../services/history'
import { Button } from '../../components/Button'
import { BorderContainer } from '../../components/BorderContainer'
import { Card } from '../../components/Card'
import { Text } from '../../components/Text'
import { Alert } from '../../components/Alert'
import { ProductHeader } from '../../components/ProductHeader'
import WrapperFlex from '../../components/WrapperFlex'

import { Container, ContainerWrapper, ProductWrapper } from './styles'
import { Item } from '../../components/Item'

export const CheckoutConfirm = () => {
  const { cartById, userData } = useSelector((state) => state.cart)

  useEffect(() => {
    if (Object.values(cartById).length === 0) history.push('/cart')
    if (typeof userData === 'object' && Object.values(userData).length === 0) history.push('/cart')
  }, [cartById, userData])

  return (
    <Container>
      <Alert type="success" message="COMPRA EFETUADA COM SUCESSO" />
      <ProductWrapper>
        <Text type="cardTextLabel">PAGAMENTO</Text>
        <Card margin="2%" padding="2% 3%">
          <Text type="cartPriceValue">
            ****.****.****.
            {String(userData.creditCard).substr(-4)}
          </Text>
          <Text type="cartPriceValue">{userData.ownerName}</Text>
          <Text type="cartPriceValue">{userData.valid}</Text>
        </Card>
      </ProductWrapper>
      <WrapperFlex>
        <ProductWrapper>
          <Text type="cardTextLabel">PRODUTOS</Text>
          <Card margin="2%" padding="1%">
            {cartById.items &&
              cartById.items.map((item) => (
                <BorderContainer color="#EEE">
                  <Item
                    key={item.product.sku}
                    item={{
                      label: item.product.name,
                      imageUrl: item.product.imageObjects[0].thumbnail
                    }}
                  />
                </BorderContainer>
              ))}
          </Card>
        </ProductWrapper>
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
                - R${' '}
                {cartById.discount && cartById.discount.toFixed(2).toString().replace('.', ',')}
              </Text>
            </ProductHeader>

            <ProductHeader>
              <Text type="cartPriceTotal">TOTAL</Text>
              <Text type="cartPriceTotal">
                R$ {cartById.total && cartById.total.toFixed(2).toString().replace('.', ',')}
              </Text>
            </ProductHeader>
          </BorderContainer>
        </ContainerWrapper>
      </WrapperFlex>
    </Container>
  )
}
