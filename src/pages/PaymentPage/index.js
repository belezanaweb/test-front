import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'
import { Price } from '../../components/ShoppingCart/Price'

import { Context } from '../../services/context'
import { useForm } from '../../services/useForm'

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
  const history = useHistory()
  const { cart, getProducts, setCard } = useContext(Context)
  const { form, onChange } = useForm({ cardNumber: '', name: '', expirationDate: '', cvv: '' })
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
    const data = {
      cardNumber: form.cardNumber,
      name: form.name,
      expirationDate: form.expirationDate
    }
    setCard(data)
    setLoadButton(false)
    history.push('/confirmacao-de-pagamento')
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
              <StyledLabel>Validade (mês/ano)*:</StyledLabel>
              <ValidateInput
                name="expirationDate"
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
        <Button type="submit" text="FINALIZAR O PEDIDO" />
      </FormContainer>
    </>
  )
}

export { PaymentPage }
