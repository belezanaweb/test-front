import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { BorderContainer } from '../../components/BorderContainer'
import { Card } from '../../components/Card'
import { Text } from '../../components/Text'
import { Item } from '../../components/Item'
import { ProductHeader } from '../../components/ProductHeader'
import { Creators as CartActions } from '../../store/ducks/cart'
import { Container, ContainerWrapper, ProductWrapper } from './styles'

export const Cart = () => {
  const dispatch = useDispatch()
  const { cartById } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(CartActions.getCartByIdRequest())
  }, [dispatch])

  return (
    <Container>
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
                    imageUrl: item.product.imageObjects[0].thumbnail,
                    price: item.product.priceSpecification.price
                      .toFixed(2)
                      .toString()
                      .replace('.', ',')
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
        <Link to="/payment">
          <Button value="SEGUIR PARA O PAGAMENTO" />
        </Link>
      </ContainerWrapper>
    </Container>
  )
}
