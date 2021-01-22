import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import App from '../App'

describe('<Routes />', () => {
  it('should shows <Loading /> component before show content', () => {
    render(<App />)
    expect(screen.getByText(/carregando/i)).toBeInTheDocument()
  })

  it('should render cart page', async () => {
    render(<App />)
    await waitFor(() => expect(screen.getByText(/seguir para o pagamento/i)).toBeInTheDocument())
  })

  it('should render payment page', async () => {
    window.history.pushState({}, 'Payemnt page', '/payment')
    render(<App />)

    await waitFor(() => expect(screen.getByText(/cartão de crédito/i)).toBeInTheDocument())
  })

  it('should render summary page', async () => {
    window.history.pushState({}, 'Summary page', '/summary')
    render(<App />)

    await waitFor(() =>
      expect(screen.getByText(/Compra efetuada com sucesso/i)).toBeInTheDocument()
    )
  })

  it('should render NotFound', async () => {
    window.history.pushState({}, 'Dummy page', '/dummy')
    render(<App />)

    await waitFor(() => expect(screen.getByText(/not found/i)).toBeInTheDocument())
  })
})
