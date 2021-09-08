import React from 'react'
import { render, screen } from '@testing-library/react'
import { products } from '../../../../util/mocks'

import Totals from '.'

describe('Totals component', () => {
  it('Should render correctly totals', async () => {
    render(<Totals products={products} />)

    expect(screen.getByText(/produtos/i)).toBeInTheDocument()
    expect(screen.getByText(/frete/i)).toBeInTheDocument()
    expect(screen.getByText(/desconto/i)).toBeInTheDocument()
    expect(screen.getByText(/total/i)).toBeInTheDocument()

    expect(screen.getByText(/r\$624\.80/i)).toBeInTheDocument()
    expect(screen.getByText(/r\$5\.30/i)).toBeInTheDocument()
    expect(screen.getByText(/\- r\$30\.00/i)).toBeInTheDocument()
    expect(screen.getByText(/r\$600\.10/i)).toHaveStyle('font-weight: bold')
  })
})
