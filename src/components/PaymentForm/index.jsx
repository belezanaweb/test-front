import React, { useState } from 'react'
import { SectionHeader } from '../SectionHeader'
import { Container, DateCVVContainer } from './styles'

export const PaymentForm = ({ fillCardNumber, fillName, fillExpiryDate, fillCVV }) => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  const handleCardNumber = (e) => {
    setCardNumber(e.target.value)
    fillCardNumber(e.target.value)
  }

  const handleName = (e) => {
    setName(e.target.value)
    fillName(e.target.value)
  }

  const handleExpiryDate = (e) => {
    setExpiryDate(e.target.value)
    fillExpiryDate(e.target.value)
  }

  const handleCvv = (e) => {
    setCvv(e.target.value)
    fillCVV(e.target.value)
  }
  return (
    <>
      <SectionHeader text={'Cartão de Crédito'} />
      <Container>
        <form data-testid="payment-form">
          <label>
            <span>Número do Cartão:</span>
            <input
              data-testid="card-number-input"
              onChange={handleCardNumber}
              type="text"
              placeholder="____.____.____.____"
              value={cardNumber}
              minLength={16}
              maxLength={16}
              required
            />
          </label>
          <label>
            <span>Nome do Titular</span>
            <input
              data-testid="name-input"
              onChange={handleName}
              value={name}
              type="text"
              placeholder="Como no cartão"
              maxLength={50}
            />
          </label>
          <DateCVVContainer>
            <label>
              <span>Validade (mês/ano):</span>
              <input
                data-testid="expiry-date-input"
                onChange={handleExpiryDate}
                type="text"
                value={expiryDate}
                placeholder="__/____"
                pattern="/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/"
                data-valid-example="06/2022"
                maxLength={7}
              />
            </label>
            <label>
              <span>CVV:</span>
              <input
                data-testid="cvv-input"
                onChange={handleCvv}
                value={cvv}
                type="text"
                placeholder="___"
                maxLength={3}
              />
            </label>
          </DateCVVContainer>
        </form>
      </Container>
    </>
  )
}
