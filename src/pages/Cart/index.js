import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'

import Title from '../../components/Title'
import Button from '../../components/Button'
import SaleInfos from '../../components/SaleInfos'
import Info from '../../components/SaleInfos/Info'
import Items from '../../components/Items'

import { mock } from '../../services/api'
import convertValue from '../../utils/convertValue'
import { handlCartInfo } from '../../store/actions/cart'
import { handlSelectedMenu } from '../../store/actions/menu'

function Cart() {
  const history = useHistory()
  const dispatch = useDispatch()

  const cartInfo = useSelector((state) => state.cart.cartInfo)

  const getItems = async () => {
    try {
      const response = await mock.get('5b15c4923100004a006f3c07')
      console.log('response ----->', response)

      if (response.data) {
        dispatch(handlCartInfo(response.data))
      }
    } catch (error) {}
  }

  useEffect(() => {
    getItems()
  }, [])

  const { items, subTotal, shippingTotal, discount } = cartInfo

  return (
    <Container>
      {items.length > 0 && (
        <>
          <Title>Produtos</Title>
          <Items items={items} />
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
          <Button
            onClick={() => {
              dispatch(handlSelectedMenu('Pagamento'))
              history.push('/payment')
            }}
          >
            Seguir para o pagamento
          </Button>
        </>
      )}
    </Container>
  )
}

export default Cart
