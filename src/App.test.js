import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'

test('renders learn react link', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  await expect(screen.getByTestId('cart-page')).toBeTruthy()
})
