import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import App from './App'

test('renders breadcrumb correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const breadCrumb = getByText('sacola')

  expect(breadCrumb).toBeInTheDocument()
})
