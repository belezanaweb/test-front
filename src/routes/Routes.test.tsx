import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import App from '../App'

describe('<Routes />', () => {
  it('should render Loading component', () => {
    render(<App />)
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('should render Cart', async () => {
    render(<App />)
    await waitFor(() => expect(screen.getByText(/cart/i)).toBeInTheDocument())
  })

  it('should render Payment', async () => {
    window.history.pushState({}, 'Test page', '/pagamento')
    render(<App />)

    await waitFor(() => expect(screen.getByText(/payment/i)).toBeInTheDocument())
  })

  it('should render Success', async () => {
    window.history.pushState({}, 'Test page', '/sucesso')
    render(<App />)

    await waitFor(() => expect(screen.getByText(/success/i)).toBeInTheDocument())
  })

  it('should render NotFound', async () => {
    window.history.pushState({}, 'Test page', '/paymm')
    render(<App />)

    await waitFor(() => expect(screen.getByText(/notfound/i)).toBeInTheDocument())
  })
})
