import React from 'react'

import { renderWithThemeProvider } from '../../../utils/test.utils'

import Input from './Input'

describe('Input', () => {
  it('should render without crash', () => {
    const id = 'input'

    const { getByTestId } = renderWithThemeProvider(<Input data-testid={id} />)

    const input = getByTestId(id)

    expect(input).toBeInTheDocument()
  })
})
