import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { renderWithThemeProvider } from '../../../utils/test.utils'

import Header from './Header'

describe('Header', () => {
  it('should render without crash', () => {
    const { getByText } = renderWithThemeProvider(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const header = getByText(/Sacola/i)

    expect(header).toBeInTheDocument()
  })
})
