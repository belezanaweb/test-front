import { screen } from '@testing-library/react'
import { render } from '../../utils/test-utils'

import { Summary } from '.'

import 'jest-styled-components'

const summaryMock = {
  subTotal: 300,
  shippingTotal: 5.4,
  discount: 20,
  total: 350,
  totalItems: 2
}

test('Summary component', () => {
  it('renders correctly', () => {
    render(<Summary summary={summaryMock} />)

    expect(/total value/i).toBeInTheDocument()
    expect(/shipping value/i).toBeInTheDocument()
    expect(/discount value/i).toBeInTheDocument()
    expect(/subtotal value/i).toBeInTheDocument()
  })
})
