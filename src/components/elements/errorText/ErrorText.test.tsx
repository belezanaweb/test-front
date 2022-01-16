import React from 'react'

import { renderWithThemeProvider } from '../../../utils/test.utils'

import ErrorText from './ErrorText'

describe('ErrorText', () => {
  it('should render without crash', () => {
    const id = 'errorText'

    const { getByTestId } = renderWithThemeProvider(
      <ErrorText data-testid={id} text="Some error" />
    )

    const text = getByTestId(id)

    expect(text).toBeInTheDocument()
  })
})
