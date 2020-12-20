import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn buttom label', () => {
  const { getByText } = render(<App />)
  const buttomLabel = getByText(/pagamento/i)
  expect(buttomLabel).toBeInTheDocument()
})
