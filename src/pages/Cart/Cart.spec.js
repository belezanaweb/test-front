import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import store from '../../store/store'
import Cart from '.'

describe('<Cart />', () => {
  it('should render a Cart page in the document', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
    expect(screen.getByTestId('cart-page')).toBeTruthy()
  })

  it('should click and go to Payment page', () => {
    const history = createMemoryHistory()

    render(
      <Provider store={store}>
        <Router history={history}>
          <Cart />
        </Router>
      </Provider>
    )

    const btn = screen.getByText(/Seguir para o pagamento/i)
    userEvent.click(btn)
    expect(history.location.pathname).toBe('/payment')
  })
})
