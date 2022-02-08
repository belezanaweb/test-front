import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/themes/default'
import { store } from '../store'

const AppProvider = ({ children }: any) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
)

export default AppProvider
