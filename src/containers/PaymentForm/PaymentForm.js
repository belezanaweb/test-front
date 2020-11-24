import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import BButton from '../../components/Button/Button'
import BInput from '../../components/Input/Input'
import SummaryCart from '../../components/SummaryCart/SummaryCart'
import { formatCardNumber, formatValidThru } from './../../utils/utils'
import { SideContainer, PageContainer, Container } from './../../components/styles'

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

Container.displayName = 'paymentForm'

export default function PaymentForm(props) {
  let history = useHistory()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [creditCard, setCreditCard] = useState('')
  const [creditCardError, setCreditCardError] = useState('')
  const [cvv, setCvv] = useState('')
  const [validThru, setValidThru] = useState('')
  const data = useSelector((state) => state.data)

  useEffect(() => {
    if (!data.id) history.push('/cart')
    dispatch({ type: 'ADD_USER_INFO', data: {} })
  }, [])

  function toCheckout() {
    history.push('/checkout')
  }

  function validateCreditCard(cardNumber) {
    setCreditCard(cardNumber)
    const num = cardNumber.replace(/\s/g, '')
    let arr = (num + '')
      .split('')
      .reverse()
      .map((x) => parseInt(x))
    let lastDigit = arr.splice(0, 1)[0]
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0)
    sum += lastDigit
    setCreditCard(cardNumber)
    return sum % 10 === 0
  }

  function handleSubmit() {
    if (validateFields()) {
      const info = {
        name,
        creditCard,
        validThru,
        cvv
      }
      dispatch({ type: 'ADD_USER_INFO', data: info })
      toCheckout()
    }
  }

  function validateFields() {
    if (!validateCreditCard(creditCard)) {
      setCreditCardError('Cartão de crédito inválido')
      setCreditCard('')
      return false
    }
    if (!name) return false
    if (!validThru) return false
    if (!cvv || cvv.length < 3) return false

    return true
  }

  return (
    <PageContainer>
      <Container>
        <Line>
          <BInput
            label="Número do cartão:"
            type="text"
            onChange={(e) => validateCreditCard(e)}
            maxlength={19}
            placeHolder="____.____.____.____"
            value={formatCardNumber(creditCard)}
            error={creditCardError}
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
              onChange={(e) => setValidThru(formatValidThru(e))}
              value={validThru}
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
      <SideContainer>
        <SummaryCart info={data} />
        <BButton onClick={() => handleSubmit()}> {'FINALIZAR O PEDIDO'} </BButton>
      </SideContainer>
    </PageContainer>
  )
}
