import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'

import theme from '../styles/theme'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
