import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'

import Routes from './'

test('render Loading component', () => {
  render(
    <Router>
      <Routes />
    </Router>
  )

  expect(screen.getByText(/loading/i)).toBeInTheDocument()
})

test('render Cart', async () => {
  render(
    <Router>
      <Routes />
    </Router>
  )

  await waitFor(() => expect(screen.getByText(/cart/i)).toBeInTheDocument())
})

test('render Payment', async () => {
  window.history.pushState({}, 'Test page', '/pagamento')
  render(
    <Router>
      <Routes />
    </Router>
  )

  await waitFor(() => expect(screen.getByText(/payment/i)).toBeInTheDocument())
})

test('render Success', async () => {
  window.history.pushState({}, 'Test page', '/sucesso')
  render(
    <Router>
      <Routes />
    </Router>
  )

  await waitFor(() => expect(screen.getByText(/success/i)).toBeInTheDocument())
})

test('render NotFound', async () => {
  window.history.pushState({}, 'Test page', '/paymm')
  render(
    <Router>
      <Routes />
    </Router>
  )

  await waitFor(() => expect(screen.getByText(/notfound/i)).toBeInTheDocument())
})
