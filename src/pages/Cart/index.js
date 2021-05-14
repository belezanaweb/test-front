import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { Container, CartContainer } from './styles'

import Title from '../../components/Title'
import Button from '../../components/Button'
import SaleInfos from '../../components/SaleInfos'
import Info from '../../components/SaleInfos/Info'
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
              <p>PRODUTOS</p>
              <p>{convertValue(subTotal)}</p>
            </Info>
            <Info>
              <p>FRETE</p>
              <p>{convertValue(shippingTotal)}</p>
            </Info>
            <Info color={'#FF7800'}>
              <p>DESCONTO</p>
              <p>- {convertValue(discount)}</p>
            </Info>
            <Info bold>
              <p>TOTAL</p>
              <p>{convertValue(subTotal + shippingTotal - discount)}</p>
            </Info>
          </SaleInfos>
          <Button onClick={() => history.push('/payment')}>Seguir para o pagamento</Button>
        </>
      )}
    </Container>
  )
}

export default Cart
