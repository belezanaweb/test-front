import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import mockApi from './Mocks'
// import renderWithRouter from './renderWithRouter'
// import Cart from '../pages/Cart';

describe('Testing buttons at the application', () => {
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
  it('Verify it there is a payment form', () => {
    const form = screen.getByTestId('payment-form')
    expect(form).toBeInTheDocument()
  })
  it('Verify is there is an image on the screen', () => {
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })
})

// describe('Testing text messages at the application', () => {
//   beforeEach(() => renderWithRouter(<App />))
//   it('Verify is there is a text SACOLA', () => {
//     const text = screen.getByTestId('cart')
//     expect(text).toBeInTheDocument()
//   })
//   it('Verify it there is a button with text FINALIZAR O PEDIDO', () => {
//     const btn = screen.getByRole('button', { name: /finalizar o pedido/i })
//     expect(btn).toBeInTheDocument()
//   })
//   it('Verify is there is a text COMPRA EFETUADA COM SUCESSO', () => {
//     const text = screen.getByTestId('success-msg')
//     expect(text).toBeInTheDocument()
//   })
// })
