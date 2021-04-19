import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import { Header } from '../../components/Header'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'
import { Price } from '../../components/ShoppingCart/Price'

import { Context } from '../../services/context'
import { useForm } from '../../services/useForm'

import { goToPaymentConfirmation } from '../../router/Coordinator'

import {
  FormContainer,
  InputContainer,
  StyledInput,
  StyledLabel,
  ValidateCvvContainer,
  ValidateInput,
  CvvInput,
  Container,
  ButtonDisable
} from './styled'

const PaymentPage = () => {
  const { history } = useHistory
  const { cart, getProducts } = useContext(Context)
  const { form, onChange } = useForm({ cardNumber: '', name: '', date: '', cvv: '' })
  const [loadButton, setLoadButton] = useState(true)

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line
  }, [])

  const handleInputChange = (e) => {
    const { value, name } = e.target
    onChange(value, name)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('paymentData', JSON.stringify(form))
    goToPaymentConfirmation(history)
    setLoadButton(false)
  }

  return (
    <>
      <Header />
      <Text text="CARTÃO DE CRÉDITO" />
      <FormContainer onSubmit={onSubmit}>
        <Container>
          <InputContainer>
            <StyledLabel>Número do cartão:</StyledLabel>
            <StyledInput
              name="cardNumber"
              type="text"
              value={form.cardNumber}
              placeholder="____.____.____.____"
              pattern="\d{16}|[^0-9]*\d{1}){16}|(\d{4}(\d{4}){3}"
              required
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <StyledLabel>Nome do Titular:</StyledLabel>
            <StyledInput
              name="name"
              value={form.name}
              type="text"
              placeholder="Nome do portador do cartão"
              required
              onChange={handleInputChange}
            />
          </InputContainer>
          <ValidateCvvContainer>
            <InputContainer>
              <StyledLabel>Validade (mês/ano)*:</StyledLabel>
              <ValidateInput
                name="date"
                value={form.expirationDate}
                pattern="(0[1-9]|10|11|12)/20[0-9]{2}$"
                placeholder="__/____"
                type="text"
                required
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <StyledLabel>CVV*:</StyledLabel>
              <CvvInput
                name="cvv"
                type="text"
                value={form.cvv}
                pattern="^\d{3}$"
                placeholder="_ _ _"
                required
                onChange={handleInputChange}
              />
            </InputContainer>
          </ValidateCvvContainer>
          <ButtonDisable type="submit" onClick={() => loadButton}>
            SALVAR
          </ButtonDisable>
        </Container>

        {cart ? (
          <Price
            subTotal={cart.subTotal}
            shippingTotal={cart.shippingTotal}
            discount={cart.discount}
            total={cart.total}
          />
        ) : (
          <div>PROCESSANDO</div>
        )}
        {loadButton ? <Button type="submit" text="FINALIZAR O PEDIDO" /> : <div></div>}
      </FormContainer>
    </>
  )
}

export { PaymentPage }
