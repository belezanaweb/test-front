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

describe('Summary component', () => {
  it('renders correctly', () => {
    render(<Summary summary={summaryMock} />)

    expect(screen.getByText('R$ 350,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 5,40')).toBeInTheDocument()
    expect(screen.getByText('R$ 20,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
  })
})
