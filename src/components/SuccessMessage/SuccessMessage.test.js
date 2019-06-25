import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../theme'
import SuccessMessage from '.'

describe('SuccessMessage', () => {
  it('should render [snapshot]', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <SuccessMessage />
      </ThemeProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
