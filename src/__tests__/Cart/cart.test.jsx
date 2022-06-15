import React from 'react'
import { render, screen } from '@testing-library/react'
import { loadProducts } from '../../redux/slices/productsSlice'
import { loadSummaryInfo } from '../../redux/slices/summarySlice'
import { mockedProducts } from '../mocks/mockProducts'
import { GlobalStyle } from '../../globalStyles'
import App from '../../App'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'

describe('Cart page', () => {
  beforeEach(() => {
    store.dispatch(loadProducts(mockedProducts.items))
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
          <App />
        </MemoryRouter>
      </Provider>
    )
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

  it('should show correct text for actionButton', () => {
    expect(screen.getByRole('button')).toHaveTextContent('Seguir para o pagamento')
  })
})
