import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
// import renderWithRouter from './renderWithRouter'

describe('Testing buttons at the application', () => {
  beforeEach(() => render(<App />))
  it('Verify if there is a button with a name SEGUIR PARA O PAGAMENTO', () => {
    const button = screen.getByRole('button', { name: /seguir para o pagamento/i })
    expect(button).toBeInTheDocument()
  })
  it('Verify it there is a payment form', () => {
    const form = screen.getByTestId('payment-form')
    expect(form).toBeInTheDocument()
  })
  it('Verify is there is an image on the screen', () => {
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })
})

describe('Testing text messages at the application', () => {
  beforeEach(() => render(<App />))
  it('Verify is there is a text SACOLA', () => {
    const text = screen.getByTestId('cart')
    expect(text).toBeInTheDocument()
  })
  it('Verify it there is a button with text FINALIZAR O PEDIDO', () => {
    const btn = screen.getByRole('button', { name: /finalizar o pedido/i })
    expect(btn).toBeInTheDocument()
  })
  it('Verify is there is a text COMPRA EFETUADA COM SUCESSO', () => {
    const text = screen.getByTestId('success-msg')
    expect(text).toBeInTheDocument()
  })
})
