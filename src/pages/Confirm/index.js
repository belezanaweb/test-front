import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Title from '../../components/Title'
import SaleInfos from '../../components/SaleInfos'
import Info from '../../components/SaleInfos/Info'
import Items from '../../components/Items'

import convertValue from '../../utils/convertValue'
import px2vw from '../../utils/px2vw'
import { maskCardNumber, maskDate } from '../../utils/maskCards'

import { Container, BlockSucess, PaymentContainer, SucessText, ConfirmIcon } from './styles'
import { handlSelectedMenu } from '../../store/actions/menu'

function Confirm() {
  const history = useHistory()
  const dispatch = useDispatch()

  const cartInfo = useSelector((state) => state.cart.cartInfo)
  const paymentInfo = useSelector((state) => state.payment.paymentInfo)

  const { subTotal, items, shippingTotal, discount } = cartInfo
  const { expiry, name, number } = paymentInfo

  useEffect(() => {
    if (cartInfo.id == null || paymentInfo.number == null) {
      dispatch(handlSelectedMenu('Sacola'))
      history.push('/')
    }
  }, [])

  return (
    <Container>
      {cartInfo.id !== null && paymentInfo.number !== null && (
        <>
          <BlockSucess>
            <ConfirmIcon size={px2vw(50)} />
            <SucessText>Compra efetuada com sucesso</SucessText>
          </BlockSucess>
          <Title>Pagamento</Title>
          <PaymentContainer>
            <p>{maskCardNumber(number)}</p>
            <p>{name}</p>
            <p>{maskDate(expiry)}</p>
          </PaymentContainer>
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
              <p>{convertValue(discount)}</p>
            </Info>
            <Info bold>
              <p>TOTAL</p>
              <p>{convertValue(subTotal + shippingTotal - discount)}</p>
            </Info>
          </SaleInfos>
        </>
      )}
    </Container>
  )
}

export default Confirm
