import React from 'react'
import { render, screen } from '@testing-library/react'
import CurrencyText from '../CurrencyText'

const price = 199.95
const formattedPrice = '199,95'
const currency = 'R$'
const CurrencyTextComponent = () => <CurrencyText value={price} />

test('renders currency text correctly', () => {
  render(<CurrencyTextComponent />)
  const currencySimbol = screen.getByText(currency)
  const formattedText = screen.getByText(formattedPrice)

  expect(currencySimbol).toBeInTheDocument()
  expect(formattedText).toBeInTheDocument()
})
