import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from '.'

describe('Header component', () => {
  it('Should render correctly', () => {
    render(<Header />)

    expect(screen.getByText('SACOLA')).toBeInTheDocument()
    expect(screen.getByText('PAGAMENTO')).toBeInTheDocument()
    expect(screen.getByText('CONFIRMAÇÃO')).toBeInTheDocument()
  })
})
