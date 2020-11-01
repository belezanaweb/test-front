import React from 'react'
import { render } from '@testing-library/react'
import { PaymentForm } from './PaymentForm'

test('renders PaymentForm', () => {
  const { container } = render(<PaymentForm />)

  expect(container).toMatchSnapshot()
})
