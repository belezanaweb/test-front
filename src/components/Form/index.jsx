import React from 'react'
import { Section, Container, Input, ContainerTwoCols } from './style'
import { Title } from '../Title'
import { maskCvv, maskExpiryDate, maskCard, removeMask } from '../../utils'
import loadable from '@loadable/component'
import { DataContext } from '../../context'
import cardValidator from 'card-validator'

const CartPrice = loadable(() => import('../CartPrice'), {
  resolveComponent: (components) => components.CartPrice
})

const Button = loadable(() => import('../Button'), {
  resolveComponent: (components) => components.Button
})

export const Form = () => {
  const [data, setData] = React.useContext(DataContext)
  const [formData, setFormData] = React.useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })

  const handleChange = (evt) => {
    const target = evt.target
    const name = target.name
    const value =
      target.name === 'cvv'
        ? maskCvv(target.value)
        : target.name === 'expiryDate'
        ? maskExpiryDate(target.value)
        : target.name === 'cardNumber'
        ? maskCard(target.value)
        : target.value
    setFormData((current) => ({
      ...current,
      [name]: value
    }))
  }

  const validateCard = (cardNumber) => {
    if (removeMask(cardNumber).length >= 16) {
      const validation = cardValidator.number(removeMask(cardNumber))
      if (!validation.isValid) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }

  const validateDate = (date) => {
    if (date.trim().length >= 7) {
      const validation = cardValidator.expirationDate(date)
      if (!validation.isValid) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }

  // Const to check if all fields are not empty and validated
  const isComplete =
    formData.cardNumber !== '' &&
    formData.cardNumber.trim().length !== 0 &&
    formData.cardName !== '' &&
    formData.cardName.trim().length !== 0 &&
    formData.expiryDate !== '' &&
    formData.expiryDate.trim().length !== 0 &&
    formData.cvv !== '' &&
    formData.cvv.trim().length !== 0 &&
    validateDate(formData.expiryDate) &&
    validateCard(formData.cardNumber)

  // Save credit card info in context
  const handleFormData = (data) => {
    setData((prev) => ({
      ...prev,
      creditCard: formData
    }))
  }

  return (
    <>
      <Section>
        <Title>Cartão de crédito</Title>
        <Container>
          <form id="payment-form">
            <label>
              <span>
                <strong>Número do Cartão:</strong>
              </span>
              <Input
                id="cardNumber"
                type="text"
                placeholder="____.____.____.____"
                name="cardNumber"
                maxLength={19}
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
              <p>{!validateCard(formData.cardNumber) && 'Invalid card number'}</p>
            </label>
            <label>
              <span>
                <strong>Nome do titular:</strong>
              </span>
              <Input
                id="cardName"
                type="text"
                placeholder="Como no cartão"
                name="cardName"
                maxLength={50}
                value={formData.cardName}
                onChange={handleChange}
                required
              />
            </label>
            <ContainerTwoCols>
              <label>
                <span>
                  <strong>Validade (mês/ano):</strong>
                </span>
                <Input
                  id="expiryDate"
                  type="text"
                  placeholder="__/____"
                  name="expiryDate"
                  maxLength={7}
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
                <p>{!validateDate(formData.expiryDate) && 'Invalid expiry date'}</p>
              </label>
              <label>
                <span>
                  <strong>CVV:</strong>
                </span>
                <Input
                  id="cvv"
                  type="text"
                  placeholder="___"
                  name="cvv"
                  maxLength={3}
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </label>
            </ContainerTwoCols>
          </form>
        </Container>
      </Section>
      <Section>
        <CartPrice cartPrice={data} />
      </Section>
      <Section>
        <Button
          type="submit"
          handleSubmit={handleFormData}
          form="payment-form"
          path={'/success'}
          text={'Finalizar o pedido'}
          disabled={!isComplete ? true : false}
        />
        <br />
      </Section>
    </>
  )
}
