import React from 'react'
import { StoryFn } from '@storybook/addons'
import { GlobalStyles } from '../src/global/styles'
import { ThemeProvider } from 'styled-components'
import theme from '../src/global/theme'

export const withGlobalStyles = (storyFn: StoryFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)
