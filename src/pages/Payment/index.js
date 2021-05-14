import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import valid from 'card-validator'
import { useHistory } from 'react-router-dom'

import { Container, PaymentContainer, ContainerCard, Form, Row } from './styles'

import Input from '../../components/Input'
import Title from '../../components/Title'
import Button from '../../components/Button'
import SaleInfos from '../../components/SaleInfos'
import Info from '../../components/SaleInfos/Info'

import convertValue from '../../utils/convertValue'

function Payment() {
  const history = useHistory()

  const [state, setState] = useState({
    cvc: {
      value: '',
      error: false,
      errorMessage: ''
    },
    expiry: {
      value: '',
      error: false,
      errorMessage: ''
    },
    focus: '',
    name: {
      value: '',
      error: false,
      errorMessage: ''
    },
    number: {
      value: '',
      error: false,
      errorMessage: ''
    },
    issuer: ''
  })

  const handleInputFocus = (e) => {
    console.log('e', e.target.value)
    setState({ ...state, focus: e.target.name })
  }

  const validateCardNumber = (e) => {
    const { value } = e.target

    const creditNumber = value.replace(/[^\d]/g, '')

    const numberValidation = valid.number(creditNumber)

    if (!numberValidation.isPotentiallyValid) {
      setState({
        ...state,
        number: {
          error: true,
          value: creditNumber,
          errorMessage: 'Número de cartão inválido!'
        }
      })
    } else {
      if (numberValidation.card) {
        setState({ ...state, issuer: numberValidation.card.type })
      }
      setState({
        ...state,
        number: {
          error: false,
          value: creditNumber,
          errorMessage: ''
        }
      })
    }
  }

  const validNameCard = (e) => {
    const { value } = e.target
    console.log('a', value)
    const name = value.replace(/[^\a-zA-Z ]/g, '').toUpperCase()

    setState({
      ...state,
      name: {
        error: false,
        value: name,
        errorMessage: ''
      }
    })
  }

  const validSize = (minSize, maxSize, key) => {
    if (state[key].value.length < minSize || state[key].value.length > maxSize) {
      setState({
        ...state,
        [key]: {
          ...state[key],
          error: true,
          errorMessage: 'Valor inválido'
        }
      })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log('ad', name)
    setState({
      ...state,
      [name]: {
        ...[name],
        value: value.replace(/[^\d]/g, '')
      }
    })
  }

  const validExpiry = (e) => {
    const { value } = e.target

    const date = new Date(value.split('/')[1] + '-' + value.split('/')[0])
    const today = new Date()

    if (
      date == 'Invalid Date' ||
      value.replace('/', '').replace('_', '').length < 6 ||
      date < today ||
      today.getFullYear() + 20 < value.split('/')[1]
    ) {
      setState({
        ...state,
        expiry: {
          ...state.expiry,
          error: true,
          errorMessage: 'Data inválida'
        }
      })
    } else {
      setState({
        ...state,
        expiry: {
          ...state.expiry,
          error: false,
          errorMessage: ''
        }
      })
    }
  }
  const { cvc, expiry, focus, name, number } = state
  return (
    <Container>
      <Title>Cartão de Crédito</Title>

      <PaymentContainer>
        <ContainerCard>
          <Cards
            cvc={cvc.value}
            expiry={expiry.value}
            focused={focus}
            name={name.value}
            number={number.value}
            placeholders={{
              name: 'SEU NOME AQUI'
            }}
            locale={{
              valid: 'válido até'
            }}
            preview={true}
            issuer={state.issuer}
          />
        </ContainerCard>

        <Form>
          <Input
            value={number.value}
            name="number"
            placeholder="____.____.____.____"
            onChange={validateCardNumber}
            onFocus={handleInputFocus}
            label="Número do cartão"
            mask="9999.9999.9999.9999"
            maskPlaceholder="____.____.____.____"
            error={number.error}
            errorMessage={number.errorMessage}
          />
          <Input
            value={name.value}
            name="name"
            placeholder="JOSHUA HERNANDEZ"
            onChange={validNameCard}
            onFocus={handleInputFocus}
            onBlur={() => validSize(2, 26, 'name')}
            label="Nome do Titular"
            maxLength={26}
            minLength={2}
            error={name.error}
            errorMessage={name.errorMessage}
          />
          <Row>
            <Input
              value={expiry.value}
              name="expiry"
              mask="99/9999"
              placeholder="__/____"
              maskPlaceholder="__/____"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={validExpiry}
              label="Validade (mês/ano)"
              size="medium"
              error={expiry.error}
              errorMessage={expiry.errorMessage}
            />
            <Input
              name="cvc"
              placeholder="___"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              mask="999"
              maskPlaceholder="___"
              label="CVV"
              size="medium"
              onBlur={() => validSize(3, 3, 'cvc')}
              error={cvc.error}
              errorMessage={cvc.errorMessage}
            />
          </Row>
        </Form>
      </PaymentContainer>
      <SaleInfos>
        <Info>
          <p>PRODUTOS</p>
          <p>R$ 624,80</p>
          {/* <p>{convertValue(subTotal)}</p> */}
        </Info>
        <Info>
          <p>FRETE</p>
          <p>R$ 5,30</p>
          {/* <p>{convertValue(shippingTotal)}</p> */}
        </Info>
        <Info color={'#FF7800'}>
          <p>DESCONTO</p>
          <p>- R$ 30,00</p>
          {/* <p>{convertValue(discount)}</p> */}
        </Info>
        <Info bold>
          <p>TOTAL</p>
          <p>R$ 600,10</p>
          {/* <p>{convertValue(subTotal + shippingTotal - discount)}</p> */}
        </Info>
      </SaleInfos>
      <Button onClick={() => history.push('/confirm')}>Finalizar Pedido</Button>
    </Container>
  )
}

export default Payment
