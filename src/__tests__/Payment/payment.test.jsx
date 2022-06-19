import React from 'react'
import { render, screen } from '@testing-library/react'
import { loadSummaryInfo } from '../../redux/slices/summarySlice'
import { mockedProducts } from '../../mocks/mockProducts'
import { GlobalStyle } from '../../globalStyles'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { Payment } from '../../pages/Payment'

describe('Payment page', () => {
  beforeEach(() => {
    store.dispatch(
      loadSummaryInfo({
        subTotal: mockedProducts.subTotal,
        discount: mockedProducts.discount,
        shippingCost: mockedProducts.shippingTotal,
        total: mockedProducts.total
      })
    )

    render(
      <Provider store={store}>
        <MemoryRouter>
          <GlobalStyle />
          <Payment />
        </MemoryRouter>
      </Provider>
    )
  })

  it('should payment form', () => {
    expect(screen.getByTestId('payment-form')).not.toBeNull()
  })

  it('should show all inputs', () => {
    expect(screen.getByTestId('card-number-input')).not.toBeNull()
    expect(screen.getByTestId('name-input')).not.toBeNull()
    expect(screen.getByTestId('expiry-date-input')).not.toBeNull()
    expect(screen.getByTestId('cvv-input')).not.toBeNull()
  })

  it('should all inputs be empty', () => {
    expect(screen.getByTestId('card-number-input')).toHaveTextContent('')
    expect(screen.getByTestId('name-input')).toHaveTextContent('')
    expect(screen.getByTestId('expiry-date-input')).toHaveTextContent('')
    expect(screen.getByTestId('cvv-input')).toHaveTextContent('')
  })

  it('should show correct values on summary', () => {
    const subTotal = `R$ ${mockedProducts.subTotal.toFixed(2)}`
    const shippingTotal = `R$ ${mockedProducts.shippingTotal.toFixed(2)}`
    const discount = `R$ ${mockedProducts.discount.toFixed(2)}`
    const total = `R$ ${mockedProducts.total.toFixed(2)}`

    expect(screen.getByTestId('subTotal')).toHaveTextContent(subTotal)
    expect(screen.getByTestId('shippingTotal')).toHaveTextContent(shippingTotal)
    expect(screen.getByTestId('discount')).toHaveTextContent(discount)
    expect(screen.getByTestId('total')).toHaveTextContent(total)
  })

  it('should show correct text for actionButton', () => {
    expect(screen.getByRole('button')).toHaveTextContent('Finalizar o pedido')
  })

  it('should have actionButton disabled', () => {
    expect(screen.getByRole('button')).toBeDisabled('Finalizar o pedido')
  })
})
