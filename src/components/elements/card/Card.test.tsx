import React from 'react'

import { renderWithThemeProvider } from '../../../utils/test.utils'

import Card from './Card'

describe('Card', () => {
  it('should render without crash', () => {
    const id = 'card'

    const { getByTestId } = renderWithThemeProvider(
      <Card data-testid={id}>Lorem ipsum dolor sit amet.</Card>
    )

    const card = getByTestId(id)

    expect(card).toBeInTheDocument()
  })
})
