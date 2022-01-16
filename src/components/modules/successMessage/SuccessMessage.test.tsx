import React from 'react'
import { renderWithThemeProvider } from '../../../utils/test.utils'

import SuccessMessage from './SuccessMessage'

describe('SuccessMessage', () => {
  it('should render without crash', () => {
    const message = 'Sucesso!'

    const { getByText } = renderWithThemeProvider(<SuccessMessage message={message} />)

    expect(getByText(message)).toBeInTheDocument()
  })
})
