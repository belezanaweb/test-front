import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Payment from '../../pages/Payment'
import Success from '../../pages/Success'
import configureStore from '../../store'

const history = createMemoryHistory()
const { store } = configureStore()

const renderPayment = () =>
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Payment} />
        <Route path="/success" component={Success} />
      </Router>
    </Provider>
  )

const changeInputMaskValue = (element, value) => {
  element.value = value
  element.selectionStart = element.selectionEnd = value.length
  TestUtils.Simulate.change(element)
}

describe('Testing Payment.js', () => {
  it('should be able render payment page', () => {
    renderPayment()

    expect(screen.getByTestId('payment-container')).toBeInTheDocument()
    expect(screen.getByText('Número do cartão:')).toBeInTheDocument()
    expect(screen.getByText(/Nome do titular:/)).toBeInTheDocument()
    expect(screen.getByText('Validade (mês/ano):')).toBeInTheDocument()
    expect(screen.getByText(/CVV:/)).toBeInTheDocument()
    expect(screen.getByText(/PRODUTOS/)).toBeInTheDocument()
    expect(screen.getByText(/FRETE/)).toBeInTheDocument()
    expect(screen.getByText(/DESCONTO/)).toBeInTheDocument()
    expect(screen.getByText(/TOTAL/)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Finalizar o pedido', exact: true })
    ).toBeInTheDocument()
  })

  it('should be able submit the form', async () => {
    renderPayment()
    const form = screen.getByTestId('payment-form')

    changeInputMaskValue(
      screen.getByRole('textbox', { name: 'creditCard', exact: true }),
      '1234123412341234'
    )
    userEvent.type(screen.getByRole('textbox', { name: 'name', exact: true }), 'Viktor Nikiforov')
    changeInputMaskValue(screen.getByRole('textbox', { name: 'date', exact: true }), '12/2029')
    changeInputMaskValue(screen.getByRole('textbox', { name: 'code', exact: true }), '123')

    await act(async () => {
      fireEvent.submit(form)
    })

    expect(screen.getByTestId('success-container')).toBeInTheDocument()
    expect(screen.getByText('COMPRA EFETUADA COM SUCESSO')).toBeInTheDocument()
  })

  it('should be able show the form errors', async () => {
    renderPayment()

    const form = screen.getByTestId('payment-form')

    await act(async () => {
      fireEvent.submit(form)
    })

    expect(screen.getByText(/Cartão de crédito inválido/)).toBeInTheDocument()
    expect(screen.getByText(/Nome do titular obrigatório/)).toBeInTheDocument()
    expect(screen.getByText(/Data de validade inválida/)).toBeInTheDocument()
    expect(screen.getByText(/CVV inválido/)).toBeInTheDocument()
  })
})
