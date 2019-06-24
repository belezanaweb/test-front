import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { render } from '@testing-library/react'
import theme from '../../theme'
import Check from '.'

describe('Check icon', () => {
  it('should render [snapshot]', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Check />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
