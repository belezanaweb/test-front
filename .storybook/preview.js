import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../src/styles'
import theme from '../src/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
