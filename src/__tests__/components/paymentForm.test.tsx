import React from 'react'
import PaymentForm from '../../components/PaymentForm'
import { render, screen } from '../../util/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const props = {
  shippingTotal: 30,
  subTotal: 600,
  total: 500,
  discount: 100,
  onSubmit: jest.fn(() => {})
}

describe('PaymentForm Component', () => {
  it('should render the form', () => {
    render(<PaymentForm {...props} />)

    expect(screen.getByLabelText(/Número do cartão:/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Nome do Titular:/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Validade (mês/ano):')).toBeInTheDocument()
    expect(screen.getByLabelText(/CVV:/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /FINALIZAR O PEDIDO/i })
    ).toBeInTheDocument()
  })

  it('button should start disabled', () => {
    render(<PaymentForm {...props} />)
    expect(
      screen.getByRole('button', { name: /FINALIZAR O PEDIDO/i })
    ).toHaveStyle({
      cursor: 'not-allowed'
    })
  })

  it('should redirect when click on button', () => {
    render(
      <Router>
        <PaymentForm {...props} />
      </Router>
    )
    userEvent.click(screen.getByRole('button', { name: /FINALIZAR O PEDIDO/i }))
  })
})
