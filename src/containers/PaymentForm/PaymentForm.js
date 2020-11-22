import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import BButton from '../../components/Button/Button'
import BInput from '../../components/Input/Input'
import SummaryCart from '../../components/SummaryCart/SummaryCart'
import * as palette from './../../styles/variables'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 6px 12px 0 12px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 29, 0.22);
  flex-direction: column;
  background-color: ${palette.BACKGROUND_CONTAINERS};
`

const Line = styled.div`
  display: flex;
  flex-direction: column;
`

const DoubleFieldsLine = styled(Line)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 100%;
`

const HalfContainter = styled.div`
  width: 40%;
`

const BottomContainer = styled.div`
  @media (min-width: 900px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
  }
`

Container.displayName = 'paymentForm'

export default function PaymentForm(props) {
  let history = useHistory()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [creditCard, setCreditCard] = useState('')
  const [cvv, setCvv] = useState('')
  const [validThru, setValidThru] = useState('')
  const data = useSelector((state) => state.data)

  useEffect(() => {
    if (!data.id) history.push('/cart')
  }, [])

  function toCheckout() {
    history.push('/checkout')
  }

  function validateCreditCard(cardNumber) {
    if (cardNumber.length < 16) return false
    var numSum = 0
    var value
    for (var i = 0; i < 16; ++i) {
      if (i % 2 === 0) {
        value = 2 * cardNumber[i]
        if (value >= 10) {
          value = Math.floor(value / 10) + (value % 10)
        }
      } else {
        value = +cardNumber[i]
      }
      numSum += value
    }
    setCreditCard(cardNumber)
    return numSum % 10 === 0
  }

  function handleSubmit() {
    const info = {
      name,
      creditCard,
      validThru,
      cvv
    }
    dispatch({ type: 'ADD_USER_INFO', data: info })
    if (validateFields()) {
      toCheckout()
    }
  }

  function validateFields() {
    if (!name) return false
    if (!creditCard) return false
    if (!validThru) return false
    if (!cvv) return false

    return true
  }

  return (
    <>
      <Container>
        <Line>
          <BInput
            label="Número do cartão:"
            type="text"
            onChange={(e) => validateCreditCard(e)}
            maxlength={16}
            placeHolder="____.____.____.____"
          />
          <BInput
            label="Nome do Titular:"
            type="text"
            placeHolder="Como no cartão"
            onChange={(e) => setName(e)}
          />
        </Line>
        <DoubleFieldsLine>
          <HalfContainter>
            <BInput
              label="Validade (mês/ano):"
              type="text"
              maxlength={7}
              width="160px"
              placeHolder="__/____"
              onChange={(e) => setValidThru(e)}
            />
          </HalfContainter>
          <HalfContainter>
            <BInput
              label="CVV:"
              type="text"
              maxlength={3}
              width="140px"
              onChange={(e) => setCvv(e)}
            />
          </HalfContainter>
        </DoubleFieldsLine>
      </Container>
      <BottomContainer>
        <SummaryCart info={data} />
        <BButton onClick={() => handleSubmit()}> {'FINALIZAR O PEDIDO'} </BButton>
      </BottomContainer>
    </>
  )
}
