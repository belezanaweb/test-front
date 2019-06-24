import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../theme'
import Input from '.'

describe('Input', () => {
  it('should render [snapshot]', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Input type="text" />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
