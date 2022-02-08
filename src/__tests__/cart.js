import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Cart from '../container/Cart'
import mock_cart from './__mockdata__/mock_cart'

/*
    - Check name and price for products list
    - Check quantity of products
    - Check total cart products (calculation based total produtos + shipping - discont)
    - Check click button (Navigate to Payment)
*/

describe('Cart', () => {
  describe('Check Information Products and Specification Cart', () => {
    const mockStore = configureStore()
    let store
    const history = createMemoryHistory()
    it('check name and price products list in screen', async () => {
      store = mockStore(mock_cart.INITIAL_STATE)
      render(
        <Router location={history.location} history={history}>
          <Provider store={store}>
            <Cart />
          </Provider>
        </Router>
      )

      await new Promise((r) => setTimeout(r, 5000))
      expect(screen.getByText(mock_cart.name_product_1)).toBeInTheDocument()
      expect(screen.getByText(mock_cart.price_1)).toBeInTheDocument()

      expect(screen.getByText(mock_cart.name_product_2)).toBeInTheDocument()
      expect(screen.getByText(mock_cart.price_2)).toBeInTheDocument()
    })

    it('check total of products with discont and shipping', async () => {
      store = mockStore(mock_cart.INITIAL_STATE)

      render(
        <Router location={history.location} history={history}>
          <Provider store={store}>
            <Cart />
          </Provider>
        </Router>
      )
      await new Promise((r) => setTimeout(r, 5000))
      let total_products = mock_cart.total_products + mock_cart.shipping_product - mock_cart.discont
      total_products = String(total_products).replace('.', ',')

      expect(screen.getByText('R$ 600,10')).toBeInTheDocument()
    })

    it('button in screen and click', async () => {
      store = mockStore(mock_cart.INITIAL_STATE)

      render(
        <Router location={history.location} history={history}>
          <Provider store={store}>
            <Cart />
          </Provider>
        </Router>
      )

      await new Promise((r) => setTimeout(r, 5000))
      expect(screen.getByText(mock_cart.button_text)).toBeInTheDocument()

      userEvent.click(screen.getByText(mock_cart.button_text))
    })
  })
})
