import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Cart from '../../pages/Cart'
import Payment from '../../pages/Payment'
import configureStore from '../../store'

const history = createMemoryHistory()
const { store } = configureStore()

const renderCart = () =>
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={Cart} />
        <Route path="/payment" component={Payment} />
      </Router>
    </Provider>
  )

describe('Testing Cart.js', () => {
  it('should be able render cart page', () => {
    renderCart()

    expect(screen.getByTestId('cart-container')).toBeInTheDocument()
    expect(screen.getByText(/PRODUTOS/)).toBeInTheDocument()
    expect(screen.getByText(/FRETE/)).toBeInTheDocument()
    expect(screen.getByText(/DESCONTO/)).toBeInTheDocument()
    expect(screen.getByText(/TOTAL/)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Seguir para o pagamento', exact: true })
    ).toBeInTheDocument()
  })

  it('should be able click in button', () => {
    renderCart()

    fireEvent.click(screen.getByRole('button', { name: 'Seguir para o pagamento', exact: true }))

    expect(screen.getByTestId('payment-container')).toBeInTheDocument()
    expect(screen.getByText('Número do cartão:')).toBeInTheDocument()
    expect(screen.getByText(/Nome do titular:/)).toBeInTheDocument()
    expect(screen.getByText('Validade (mês/ano):')).toBeInTheDocument()
    expect(screen.getByText(/CVV:/)).toBeInTheDocument()
  })
})
