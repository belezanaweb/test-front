import React from 'react'

import { renderWithThemeProvider } from '../../../utils/test.utils'

import PageTitle from './PageTitle'

describe('PageTitle', () => {
  it('should render without crash', () => {
    const id = 'title'

    const { getByTestId } = renderWithThemeProvider(
      <PageTitle data-testid={id} text="Some title" />
    )

    const title = getByTestId(id)

    expect(title).toBeInTheDocument()
  })
})
