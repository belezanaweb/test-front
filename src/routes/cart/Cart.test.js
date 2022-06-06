import React from 'react'
import '../../tests/matchMedia'
import { render } from '@testing-library/react'
import Cart from './Cart.jsx'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'

test('renders the cart page', () => {
  const mockStore = configureStore()
  const initialState = {
    cart: {
      isCartActive: false
    },
    confirm: {
      isConfirmActive: false
    },
    payment: {
      isPaymentActive: false
    }
  }
  let store
  store = mockStore(initialState)

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
})
