import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
