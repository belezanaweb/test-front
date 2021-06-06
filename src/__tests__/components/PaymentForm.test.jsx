import React from 'react'
import { render } from '../../utils/test-utils'
import { PaymentForm } from '../../components'

describe('PaymentForm', () => {
  test('should render without errors', () => {
    const { container } = render(<PaymentForm />)
    expect(container).toBeInTheDocument()
  })

  test('should match with snapshot', () => {
    const { container } = render(<PaymentForm />)
    expect(container).toMatchSnapshot()
  })
})
