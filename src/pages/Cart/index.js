import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { Container, CartContainer, SaleInfos, Info, TextInfo } from './styles'

import Title from '../../components/Title'
import Button from '../../components/Button'
import CartItem from './CartItem'

import { mock } from '../../services/api'
import convertValue from '../../utils/convertValue'

function Cart() {
  const history = useHistory()

  const [state, setState] = useState({
    discount: null,
    id: null,
    items: [],
    shippingTotal: null,
    subTotal: null,
    total: null
  })

  const getItems = async () => {
    try {
      const response = await mock.get('5b15c4923100004a006f3c07')
      console.log('response ----->', response)

      if (response.data) {
        setState(response.data)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getItems()
  }, [])

  const { items, subTotal, shippingTotal, discount } = state

  return (
    <Container>
      {items.length > 0 && (
        <>
          <Title>Produtos</Title>
          <CartContainer>
            {items.map((item) => {
              return <CartItem item={item} />
            })}
          </CartContainer>
          <SaleInfos>
            <Info>
              <TextInfo>PRODUTOS</TextInfo>
              <TextInfo>{convertValue(subTotal)}</TextInfo>
            </Info>
            <Info>
              <TextInfo>FRETE</TextInfo>
              <TextInfo>{convertValue(shippingTotal)}</TextInfo>
            </Info>
            <Info color={'#FF7800'}>
              <TextInfo>DESCONTO</TextInfo>
              <TextInfo>{convertValue(discount)}</TextInfo>
            </Info>
            <Info bold>
              <TextInfo>TOTAL</TextInfo>
              <TextInfo>{convertValue(subTotal + shippingTotal - discount)}</TextInfo>
            </Info>
          </SaleInfos>
          <Button onClick={() => history.push('/payment')}>Seguir para o pagamento</Button>
        </>
      )}
    </Container>
  )
}

export default Cart
