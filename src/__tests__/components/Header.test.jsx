import React from 'react'

import { render } from '../../utils/test-utils'
import Header from '../../components/Header'

describe('Header', () => {
  test('should render without errors', () => {
    const { container } = render(<Header />)
    expect(container).toBeInTheDocument()
  })

  test('should render header with correct navbar links', () => {
    const { getByText } = render(<Header />)

    expect(getByText(/Sacola/i)).toBeInTheDocument()
    expect(getByText(/Pagamento/i)).toBeInTheDocument()
    expect(getByText(/Confirmação/i)).toBeInTheDocument()
  })

  test('should match with snapshot', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
