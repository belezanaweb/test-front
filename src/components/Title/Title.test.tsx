import React from 'react'
import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('should render Title component', () => {
    render(<Title>Produtos</Title>)

    expect(screen.getByText(/produtos/i)).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(<Title>Produtos</Title>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
