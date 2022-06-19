import React from 'react'
import { Confirmation } from '../../pages/Confirmation'
import { render, screen, waitForElement, debug } from '@testing-library/react'
import { loadProducts } from '../../redux/slices/productsSlice'
import { handlePayment } from '../../redux/slices/paymentSlice'
import { loadSummaryInfo } from '../../redux/slices/summarySlice'
import { mockedProducts } from '../../mocks/mockProducts'
import { GlobalStyle } from '../../globalStyles'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'

describe('Confirmation page', () => {
  beforeEach(() => {
    store.dispatch(loadProducts(mockedProducts.items))

    store.dispatch(
      handlePayment({
        cardNumber: '1234.1234.1234.1234',
        name: 'Filipe R Paiva',
        expiryDate: '07/2023',
        cvv: '677'
      })
    )

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
          <Confirmation />
        </MemoryRouter>
      </Provider>
    )
  })

  it('should show all payment information', () => {
    expect(screen.getByTestId('payment-information')).not.toBeNull()
    expect(screen.getByTestId('card-number-information')).toHaveTextContent('****.****.****.1234')
    expect(screen.getByTestId('name-information')).toHaveTextContent('Filipe R Paiva')
    expect(screen.getByTestId('expiry-date-information')).toHaveTextContent('07/2023')
  })

  it('should show all products', () => {
    expect(screen.getAllByRole('article')).toHaveLength(mockedProducts.items.length)
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
})
