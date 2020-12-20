import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'

import Navbar from './Navbar'

const MockCart =  () => <h1>Cart</h1>
const MockPayment = () => <h1>Payment</h1>
const MockConfirmation = () => <h1>Confirmation</h1>

describe('Navbar', () => {
  test('renders with mock data', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MockCart} />
          <Route path="/payment" component={MockPayment} />
          <Route path="/confirmation" component={MockConfirmation} />
        </Switch>
      </Router>
    )

    fireEvent.click(screen.getByText('Pagamento'))
    await waitFor(() => screen.getByText('Payment'))
    expect(screen.getByText('Payment')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Sacola'))
    await waitFor(() => screen.getByText('Cart'))
    expect(screen.getByText('Cart')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Confirmação'))
    await waitFor(() => screen.getByText('Confirmation'))
    expect(screen.getByText('Confirmation')).toBeInTheDocument()
  })
})
