import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import App from './App'

test('renders app with breadcrumb correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const breadcrumb = getByText('sacola')

  expect(breadcrumb).toBeInTheDocument()
})
