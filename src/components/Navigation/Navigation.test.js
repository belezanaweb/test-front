import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../theme'
import Navigation from '.'

describe('Navigation', () => {
  it('should render [snapshot]', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Navigation>
          <Navigation.List>
            <Navigation.Item active>Sacola</Navigation.Item>
            <Navigation.Item>Pagamento</Navigation.Item>
            <Navigation.Item>Confirmação</Navigation.Item>
          </Navigation.List>
        </Navigation>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
