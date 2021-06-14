import React from 'react'
import { screen } from '@testing-library/react'

import renderWithRouter from '../../jest/renderWithRouter'
import * as useCart from '../../hooks/useCart'
import Layout from './Layout'

const layoutDefaultProps = {
  children: <h1>children</h1>
}

describe('Layout', () => {
  it('should render Layout', () => {
    jest.spyOn(useCart, 'useCart').mockImplementation(() => ({ id: '123 ' }))
    const { container } = renderWithRouter(<Layout {...layoutDefaultProps} />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render Loading when id is not provided', () => {
    jest.spyOn(useCart, 'useCart').mockImplementation(() => ({ id: null }))
    renderWithRouter(<Layout {...layoutDefaultProps} />)

    expect(screen.queryByTestId('loading')).toBeInTheDocument()
  })
})
