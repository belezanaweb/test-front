import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import NextStepButton from '../../components/NextStepButton/NextStepButton'
import Subtitle from '../../components/Subtitle/Subtitle'
import TotalCard from '../../components/TotalCard/TotalCard'
import { goToConfirmationPage } from '../../router/Coordinator'
import {
  FormContainer,
  InputContainer,
  StyledInput,
  StyledLabel,
  ValidateCvvContainer,
  ValidateInput,
  CvvInput,
  PageContainer,
  Container
} from './styles'

const PaymentPage = () => {
  const history = useHistory()
  const [cart, setCart] = useState()
  const [form, setForm] = useState({ number: '', name: '', date: '', cvv: '' })

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')))
  }, [])

  const handleInputChange = (event) => {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    localStorage.setItem('paymentData', JSON.stringify(form))
    goToConfirmationPage(history)
  }

  return (
    <PageContainer>
      <Header />
      <Subtitle text="CARTÃO DE CRÉDITO" />
      <FormContainer onSubmit={onSubmitForm}>
        <Container>
          <InputContainer>
            <StyledLabel>Número do cartão:</StyledLabel>
            <StyledInput
              name="number"
              value={form.number}
              placeholder="____.____.____.____"
              pattern="(\d{4}).(\d{4}).(\d{4}).(\d{4})$"
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
              placeholder="Como no cartão"
              required
              onChange={handleInputChange}
            />
          </InputContainer>
          <ValidateCvvContainer>
            <InputContainer>
              <StyledLabel>Validade (mês/ano):</StyledLabel>
              <ValidateInput
                name="date"
                value={form.date}
                pattern="(0[1-9]|10|11|12)/20[0-9]{2}$"
                placeholder="__/____"
                required
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <StyledLabel>CVV:</StyledLabel>
              <CvvInput
                name="cvv"
                value={form.cvv}
                pattern="^\d{3}$"
                placeholder="___"
                required
                onChange={handleInputChange}
              />
            </InputContainer>
          </ValidateCvvContainer>
        </Container>
        {cart && (
          <TotalCard
            subTotal={cart.subTotal}
            shippingTotal={cart.shippingTotal}
            discount={cart.discount}
            total={cart.total}
          />
        )}
        <NextStepButton type="submit" text="FINALIZAR O PEDIDO" />
      </FormContainer>
    </PageContainer>
  )
}

export default PaymentPage
