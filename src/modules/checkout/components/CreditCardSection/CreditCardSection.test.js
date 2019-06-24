import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../../theme'
import CreditCardSection from '.'

describe('CreditCardSection', () => {
  it('should render [snapshot]', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <CreditCardSection />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
