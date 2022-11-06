import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import mockApi from './Mocks'
import Payment from '../pages/Payment'

describe('Testing the Cart page', () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) =>
      Promise.resolve({
        json: () => {
          if (url === 'http://www.mocky.io/v2/5b15c4923100004a006f3c07')
            return Promise.resolve(mockApi)
        }
      })
    )
    render(<App />, { wrapper: BrowserRouter })
  })
  it('Verify if there is a button with a name SEGUIR PARA O PAGAMENTO', () => {
    const button = screen.getByText(/sacola/i)
    expect(button).toBeInTheDocument()
  })
  it('Verify is there is a mask image on the screen', () => {
    const img = screen.getByRole('img', {
      name: /l'oréal professionnel expert absolut repair cortex lipidium /i
    })
    expect(img).toBeInTheDocument()
  })
  it('Verify is there is a perfume image on the screen', () => {
    const shoeImg = screen.getByRole('img', {
      name: /good girl carolina herrera eau de parfum \- perfume feminino 30ml/i
    })
    expect(shoeImg).toBeInTheDocument()
  })
  it('Verify is there is an another mask image on the screen', () => {
    const maskImg = screen.getByRole('img', {
      name: /senscience inner restore intensif \- máscara capilar 50ml/i
    })
    expect(maskImg).toBeInTheDocument()
  })
  it('Verify is there is a button on the screen', () => {
    const btn = screen.getByRole('button', { name: /seguir para o pagamento/i })
    expect(btn).toBeInTheDocument()
  })
})

describe('Testing the Payment page', () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) =>
      Promise.resolve({
        json: () => {
          if (url === 'http://www.mocky.io/v2/5b15c4923100004a006f3c07')
            return Promise.resolve(mockApi)
        }
      })
    )
    render(<Payment />, { wrapper: BrowserRouter })
  })
  it('Verify credit card form', () => {
    const creditCard = screen.getByText(/cartão de crédito/i)
    expect(creditCard).toBeInTheDocument()
  })
  it('Verify is there is a button on the screen', () => {
    const btn = screen.getByRole('button', { name: /finalizar o pedido/i })
    expect(btn).toBeInTheDocument()
  })
  it('Verify if there is a PRODUTOS text', () => {
    const product = screen.getByText(/produtos/i)
    expect(product).toBeInTheDocument()
  })
  it('Verify if there is a FRETE text', () => {
    const frete = screen.getByText(/frete/i)
    expect(frete).toBeInTheDocument()
  })
  it('Verify if there is a DESCONTO text', () => {
    const discount = screen.getByText(/desconto/i)
    expect(discount).toBeInTheDocument()
  })
})
